import fs from 'node:fs';
import path from 'node:path';

const load=(name)=>fs.readdirSync('data').filter((file)=>file.startsWith(name)&&file.endsWith('.json')).flatMap((file)=>JSON.parse(fs.readFileSync(path.join('data',file),'utf8')));
const ok=(value,message)=>{if(!value)throw new Error(message)};
const platforms=load('platforms');
const events=load('events');
const evidence=load('evidence');
const outcomes=load('outcomes');
const products=load('products');
const termsRisk=load('terms-risk');
const claimsOngoing=outcomes.filter((item)=>item.outcome_status==='claims_ongoing').length;

const home=fs.readFileSync('dist/index.html','utf8');
const registry=fs.readFileSync('dist/platforms/index.html','utf8');
const support=fs.readFileSync('dist/support/index.html','utf8');
const stats=fs.readFileSync('dist/stats/index.html','utf8');
const timeline=fs.readFileSync('dist/timeline/index.html','utf8');

const homeRecordLinks=[...home.matchAll(/href="\/platform\/([^/]+)\/"[^>]*class="home-record-card"|class="home-record-card"[^>]*href="\/platform\/([^/]+)\//g)];
ok(homeRecordLinks.length<=18,`home record count ${homeRecordLinks.length} exceeds 18`);
ok(home.includes(`href="/platforms/"`),'home missing complete platform registry link');
ok(home.includes(`<dt>Platforms</dt><dd>${platforms.length}</dd>`),'home platform total');
ok(home.includes(`<dt>Claims ongoing</dt><dd>${claimsOngoing}</dd>`),'home claims');
ok(home.includes('href="/support/"'),'home support link');

for(const platform of platforms)ok(registry.includes(`/platform/${platform.slug}/`),`registry missing ${platform.slug}`);
ok(registry.includes(`all ${platforms.length} reviewed platform records`),'registry total');
ok(registry.includes('id="previousPage"')&&registry.includes('id="nextPage"'),'registry pagination controls');
ok(support.includes('What support does not buy'),'support independence section');
ok(!support.includes('href="/support/"'),'support page self-link');
ok([...timeline.matchAll(/class=(?:"timeline-record"|timeline-record)/g)].length===events.length,'timeline rows');
for(const count of [platforms.length,events.length,evidence.length,outcomes.length,products.length,termsRisk.length])ok(stats.includes(`<strong>${count}</strong>`),`stats ${count}`);
for(const platform of platforms)ok(fs.existsSync(`dist/platform/${platform.slug}/index.html`),`detail ${platform.slug}`);

console.log(JSON.stringify({platforms:platforms.length,events:events.length,evidence:evidence.length,outcomes:outcomes.length,products:products.length,terms_risk:termsRisk.length,claims_ongoing:claimsOngoing,home_record_links:homeRecordLinks.length}));
