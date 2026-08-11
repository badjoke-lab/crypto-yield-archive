import fs from 'node:fs/promises';
import path from 'node:path';

const posts = [
  { id: '2084884136523948149', user: 'RippleXity' },
  { id: '2084604284122038562', user: 'gimgyeongh62101' },
  { id: '2084206277757161565', user: 'gimgyeongh62101' },
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
    .replace(/&mdash;/g, '—')
    .replace(/\s+\n/g, '\n')
    .trim();
}

function syndicationToken(id) {
  return ((Number(id) / 1e15) * Math.PI).toString(36).replace(/(0+|\.)/g, '');
}

function extractShortUrls(html = '') {
  return [...new Set([...html.matchAll(/https:\/\/t\.co\/[A-Za-z0-9]+/g)].map((match) => match[0]))];
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
      final_url: response.url,
      content_type: response.headers.get('content-type'),
      json,
      body_preview: bodyText.slice(0, 12000),
    };
  } catch (error) {
    return { ok: false, error: String(error) };
  }
}

async function resolveShortUrl(url) {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'crypto-yield-archive-research/1.0' },
      signal: AbortSignal.timeout(20_000),
    });
    const type = response.headers.get('content-type') || '';
    let bodyPreview = null;
    if (/text|json|javascript/i.test(type)) {
      bodyPreview = (await response.text()).slice(0, 4000);
    } else {
      await response.body?.cancel();
    }
    return {
      ok: response.ok,
      status: response.status,
      final_url: response.url,
      content_type: type,
      body_preview: bodyPreview,
    };
  } catch (error) {
    return { ok: false, error: String(error) };
  }
}

async function downloadMedia(url, destination) {
  try {
    const response = await fetch(url, {
      headers: { 'user-agent': 'crypto-yield-archive-research/1.0' },
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) return { ok: false, status: response.status, url };
    const bytes = Buffer.from(await response.arrayBuffer());
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, bytes);
    return {
      ok: true,
      status: response.status,
      url,
      destination,
      bytes: bytes.length,
      content_type: response.headers.get('content-type'),
    };
  } catch (error) {
    return { ok: false, url, error: String(error) };
  }
}

const results = [];
const mediaManifest = [];
for (const post of posts) {
  const canonicalUrl = `https://twitter.com/${post.user}/status/${post.id}`;
  const xUrl = `https://x.com/${post.user}/status/${post.id}`;
  const oembed = await fetchJson(`https://publish.twitter.com/oembed?omit_script=true&dnt=true&url=${encodeURIComponent(canonicalUrl)}`);
  const token = syndicationToken(post.id);
  const syndication = await fetchJson(`https://cdn.syndication.twimg.com/tweet-result?id=${post.id}&lang=en&token=${token}`);
  const shortUrls = extractShortUrls(oembed.json?.html || '');
  const resolvedLinks = [];
  for (const shortUrl of shortUrls) {
    resolvedLinks.push({ short_url: shortUrl, ...(await resolveShortUrl(shortUrl)) });
  }

  const mediaDownloads = [];
  const mediaDetails = Array.isArray(syndication.json?.mediaDetails) ? syndication.json.mediaDetails : [];
  for (const [index, media] of mediaDetails.entries()) {
    if (media?.media_url_https) {
      const parsed = new URL(media.media_url_https);
      const ext = path.extname(parsed.pathname) || '.bin';
      const destination = `artifacts/xora-social-media/${post.id}-${index + 1}${ext}`;
      const downloaded = await downloadMedia(media.media_url_https, destination);
      mediaDownloads.push({ type: media.type ?? null, role: 'poster_or_photo', ...downloaded });
      mediaManifest.push({ post_id: post.id, type: media.type ?? null, role: 'poster_or_photo', ...downloaded });
    }

    if (media?.type === 'video' && Array.isArray(media?.video_info?.variants)) {
      const mp4s = media.video_info.variants
        .filter((variant) => variant?.content_type === 'video/mp4' && variant?.url)
        .sort((a, b) => (a.bitrate ?? 0) - (b.bitrate ?? 0));
      const preferred = [...mp4s].reverse().find((variant) => (variant.bitrate ?? 0) <= 3_000_000) ?? mp4s.at(-1);
      if (preferred) {
        const destination = `artifacts/xora-social-media/${post.id}-video.mp4`;
        const downloaded = await downloadMedia(preferred.url, destination);
        mediaDownloads.push({ type: 'video', role: 'video_variant', bitrate: preferred.bitrate ?? null, ...downloaded });
        mediaManifest.push({ post_id: post.id, type: 'video', role: 'video_variant', bitrate: preferred.bitrate ?? null, ...downloaded });
      }
    }
  }

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
    syndication_token: token,
    syndication,
    resolved_links: resolvedLinks,
    media_downloads: mediaDownloads,
  });
}

const report = {
  generated_at: new Date().toISOString(),
  purpose: 'Preserve publicly retrievable text/metadata/media for X posts cited in the XORA Finance incident research without treating unavailable or screenshot-only content as fact.',
  posts: results,
  media_manifest: mediaManifest,
};

const output = process.argv[2] || 'artifacts/xora-social-evidence.json';
await fs.mkdir(path.dirname(output), { recursive: true });
await fs.writeFile(output, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(report, null, 2));
