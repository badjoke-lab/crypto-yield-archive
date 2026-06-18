import fs from 'node:fs';

fs.mkdirSync('src/generated', { recursive: true });
fs.writeFileSync('src/generated/build-metadata.json', JSON.stringify({ generated_at: new Date().toISOString() }, null, 2));
