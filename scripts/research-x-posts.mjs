import fs from 'node:fs/promises';
import path from 'node:path';

const posts = [
  { id: '2084884136523948149', user: 'RippleXity' },
  { id: '2084604284122038562', user: 'gimgyeongh62101' },
  { id: '2084227389442462069', user: 'XRPDegens' },
  { id: '2084608721343398018', user: 'DNF_sol' },
];

function decodeHtml(text = '') {
  return text
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+\n/g, '\n')
    .trim();
}

async function fetchJson(url) {
  try {
    const response = await fetch(url, {
      headers: { 'user-agent': 'crypto-yield-archive-research/1.0' },
      signal: AbortSignal.timeout(20_000),
    });
    const bodyText = await response.text();
    let json = null;
    try { json = JSON.parse(bodyText); } catch {}
    return {
      ok: response.ok,
      status: response.status,
      content_type: response.headers.get('content-type'),
      json,
      body_preview: bodyText.slice(0, 4000),
    };
  } catch (error) {
    return { ok: false, error: String(error) };
  }
}

const results = [];
for (const post of posts) {
  const canonicalUrl = `https://twitter.com/${post.user}/status/${post.id}`;
  const xUrl = `https://x.com/${post.user}/status/${post.id}`;
  const oembed = await fetchJson(`https://publish.twitter.com/oembed?omit_script=true&dnt=true&url=${encodeURIComponent(canonicalUrl)}`);
  const syndication = await fetchJson(`https://cdn.syndication.twimg.com/tweet-result?id=${post.id}&lang=en`);

  results.push({
    ...post,
    canonical_url: canonicalUrl,
    x_url: xUrl,
    oembed: {
      ...oembed,
      extracted_text: oembed.json?.html ? decodeHtml(oembed.json.html) : null,
      author_name: oembed.json?.author_name ?? null,
      author_url: oembed.json?.author_url ?? null,
    },
    syndication,
  });
}

const report = {
  generated_at: new Date().toISOString(),
  purpose: 'Preserve publicly retrievable text/metadata for X posts cited in the XORA Finance incident research without treating unavailable or screenshot-only content as fact.',
  posts: results,
};

const output = process.argv[2] || 'artifacts/xora-social-evidence.json';
await fs.mkdir(path.dirname(output), { recursive: true });
await fs.writeFile(output, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(report, null, 2));
