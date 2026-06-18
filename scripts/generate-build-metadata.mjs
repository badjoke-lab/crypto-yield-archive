import fs from 'node:fs';

const env = process.env;
const metadata = {
  generated_at: new Date().toISOString(),
  commit: env.CF_PAGES_COMMIT_SHA || env.VERCEL_GIT_COMMIT_SHA || env.GITHUB_SHA || 'unknown',
  branch: env.CF_PAGES_BRANCH || env.VERCEL_GIT_COMMIT_REF || env.GITHUB_HEAD_REF || env.GITHUB_REF_NAME || 'main',
};

fs.mkdirSync('src/generated', { recursive: true });
fs.writeFileSync('src/generated/build-metadata.json', `${JSON.stringify(metadata, null, 2)}\n`);
