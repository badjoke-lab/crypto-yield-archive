import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  dataDir,
  loadGroup,
  normalizeDomain,
  normalizeText,
  readArray,
} from './lib/registry-files.mjs';

const ACTIVE_DECISIONS = new Set(['add_now', 'needs_research']);
const TERMINAL_DECISIONS = new Set([
  'duplicate',
  'already_recorded',
  'out_of_scope',
  'insufficient_evidence',
]);

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function stableFileDigest(files) {
  const hash = crypto.createHash('sha256');
  for (const file of [...files].sort()) {
    hash.update(path.relative(process.cwd(), file));
    hash.update('\0');
    hash.update(fs.readFileSync(file));
    hash.update('\0');
  }
  return hash.digest('hex');
}

function canonicalFiles() {
  return fs.readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => path.join(dataDir, file));
}

function tokenSet(value) {
  return new Set(normalizeText(value).split(' ').filter(Boolean));
}

function jaccard(left, right) {
  const a = tokenSet(left);
  const b = tokenSet(right);
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
}

function compact(value) {
  return normalizeText(value).replaceAll(' ', '');
}

function candidateNames(candidate) {
  return [candidate.canonical_name, ...(candidate.aliases ?? [])]
    .map((value) => String(value ?? '').trim())
    .filter(Boolean);
}

function platformNames(platform) {
  return [platform.canonical_name, ...(platform.aliases ?? [])]
    .map((value) => String(value ?? '').trim())
    .filter(Boolean);
}

function scoreCandidateAgainstPlatform(candidate, platform) {
  const reasons = [];
  let score = 0;
  const cNames = candidateNames(candidate);
  const pNames = platformNames(platform);
  const candidateDomain = normalizeDomain(candidate.domain);
  const platformDomain = normalizeDomain(
    platform.official_domain_original || platform.official_url_original,
  );

  if (candidateDomain && platformDomain && candidateDomain === platformDomain) {
    score = 100;
    reasons.push({ type: 'domain_exact', value: candidateDomain, score: 100 });
  }

  for (let cIndex = 0; cIndex < cNames.length; cIndex += 1) {
    for (let pIndex = 0; pIndex < pNames.length; pIndex += 1) {
      const candidateName = cNames[cIndex];
      const platformName = pNames[pIndex];
      const normalizedCandidate = normalizeText(candidateName);
      const normalizedPlatform = normalizeText(platformName);
      if (!normalizedCandidate || !normalizedPlatform) continue;

      if (normalizedCandidate === normalizedPlatform) {
        const exactScore = cIndex === 0 && pIndex === 0
          ? 100
          : cIndex === 0
            ? 96
            : pIndex === 0
              ? 94
              : 90;
        score = Math.max(score, exactScore);
        reasons.push({
          type: cIndex === 0 && pIndex === 0
            ? 'canonical_name_exact'
            : 'name_alias_exact',
          candidate_value: candidateName,
          platform_value: platformName,
          score: exactScore,
        });
        continue;
      }

      if (compact(candidateName) === compact(platformName)) {
        score = Math.max(score, 88);
        reasons.push({
          type: 'name_compact_exact',
          candidate_value: candidateName,
          platform_value: platformName,
          score: 88,
        });
        continue;
      }

      const similarity = jaccard(candidateName, platformName);
      if (similarity >= 0.75) {
        const fuzzyScore = Math.round(65 + similarity * 20);
        score = Math.max(score, fuzzyScore);
        reasons.push({
          type: 'name_token_similarity',
          candidate_value: candidateName,
          platform_value: platformName,
          similarity: Number(similarity.toFixed(3)),
          score: fuzzyScore,
        });
      }
    }
  }

  return {
    platform_id: platform.id,
    canonical_name: platform.canonical_name,
    domain: platformDomain || null,
    score,
    reasons: reasons.sort((a, b) => b.score - a.score),
  };
}

function classify(candidate, matches) {
  const top = matches[0] ?? null;
  if (TERMINAL_DECISIONS.has(candidate.decision)) {
    return {
      classification: candidate.decision === 'out_of_scope'
        ? 'out_of_scope'
        : 'historical_decision',
      eligible_for_draft: false,
      rationale: `Candidate already has terminal decision=${candidate.decision}.`,
    };
  }
  if (!ACTIVE_DECISIONS.has(candidate.decision)) {
    return {
      classification: 'manual_review_required',
      eligible_for_draft: false,
      rationale: `Unrecognized active decision=${candidate.decision}.`,
    };
  }
  if (top?.score === 100) {
    return {
      classification: 'exact_duplicate',
      eligible_for_draft: false,
      rationale: `Exact canonical identity signal matched ${top.platform_id}.`,
    };
  }
  if ((top?.score ?? 0) >= 88) {
    return {
      classification: 'probable_duplicate',
      eligible_for_draft: false,
      rationale: `Strong identity similarity matched ${top.platform_id}.`,
    };
  }
  if ((top?.score ?? 0) >= 70) {
    return {
      classification: 'ambiguous_match',
      eligible_for_draft: false,
      rationale: `Ambiguous identity similarity requires review against ${top.platform_id}.`,
    };
  }
  if (candidate.decision === 'needs_research') {
    return {
      classification: 'manual_review_required',
      eligible_for_draft: false,
      rationale: 'Candidate is duplicate-clear but its scope, evidence, or product boundary is unresolved.',
    };
  }
  return {
    classification: 'new_candidate',
    eligible_for_draft: true,
    rationale: 'No canonical identity match was found and the candidate is marked add_now.',
  };
}

export function scanCandidates({ candidates, platforms, canonicalDigest = null }) {
  const results = candidates.map((candidate) => {
    const matches = platforms
      .map((platform) => scoreCandidateAgainstPlatform(candidate, platform))
      .filter((match) => match.score > 0)
      .sort((a, b) => b.score - a.score || a.platform_id.localeCompare(b.platform_id))
      .slice(0, 5);
    return {
      candidate_id: candidate.candidate_id,
      canonical_name: candidate.canonical_name,
      decision: candidate.decision,
      domain: normalizeDomain(candidate.domain) || null,
      ...classify(candidate, matches),
      matches,
    };
  });

  const counts = {};
  for (const result of results) {
    counts[result.classification] = (counts[result.classification] ?? 0) + 1;
  }

  return {
    schema_version: 1,
    generated_at: new Date().toISOString(),
    canonical_sha256: canonicalDigest,
    candidate_count: candidates.length,
    platform_count: platforms.length,
    counts,
    results,
  };
}

function parseArgs(argv) {
  const args = {
    input: 'data-staging/candidates/cya-candidates.json',
    output: 'data-staging/generated/candidate-scan.json',
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--input') args.input = argv[++index];
    else if (value === '--output') args.output = argv[++index];
    else throw new Error(`Unknown argument: ${value}`);
  }
  return args;
}

export function runCli(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const canonical = canonicalFiles();
  const beforeDigest = stableFileDigest(canonical);
  const candidates = readArray(path.resolve(args.input));
  const platforms = loadGroup('platforms');
  const result = scanCandidates({
    candidates,
    platforms,
    canonicalDigest: beforeDigest,
  });
  const outputPath = path.resolve(args.output);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);

  const afterDigest = stableFileDigest(canonical);
  if (afterDigest !== beforeDigest) {
    throw new Error('Canonical data changed while running candidate scanner.');
  }

  const draftEligible = result.results.filter((item) => item.eligible_for_draft).length;
  console.log(
    `CYA candidate scan complete: ${result.candidate_count} candidates, `
    + `${draftEligible} draft-eligible, canonical=${beforeDigest.slice(0, 12)}.`,
  );
  return result;
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (entryPath && fileURLToPath(import.meta.url) === entryPath) {
  runCli();
}
