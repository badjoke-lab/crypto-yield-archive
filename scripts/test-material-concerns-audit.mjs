import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const output = execFileSync(process.execPath, ['scripts/material-concerns-retroactive-audit.mjs', '--json'], { encoding: 'utf8' });
const marker = '{\n  "generated_from"';
const start = output.indexOf(marker);
assert.notEqual(start, -1, 'material-concerns audit JSON payload not found');
const audit = JSON.parse(output.slice(start));
const blueBenx = audit.rows.find((row) => row.platform_id === 'cya_plat_000057');
assert.ok(blueBenx, 'BlueBenx audit row missing');
assert.equal(blueBenx.dimensions.source_of_yield, 'derivable', 'BlueBenx source-of-yield evidence should remain derivable');
assert.equal(blueBenx.dimensions.principal_guarantee, 'research_required', 'A statement that yield/remuneration is not guaranteed must not be treated as principal-guarantee evidence');
console.log('Material concerns principal-guarantee regression guard passed.');
