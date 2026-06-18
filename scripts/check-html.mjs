import fs from 'node:fs';
import path from 'node:path';
const load = (name) => fs.readdirSync('data').filter((file) => file.startsWith(name) && file.endsWith('.json')).flatMap((file) => JSON.parse(fs.readFileSync(path.join('data', file), 'utf8')));
const platforms = load('platforms');
const events = load('events');
console.log(platforms.length, events.length);
