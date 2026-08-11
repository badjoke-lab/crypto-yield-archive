import fs from 'node:fs/promises';
import path from 'node:path';

function readArg(name, fallback = undefined) {
  const index = process.argv.indexOf(`--${name}`);
  if (index === -1) return fallback;
  const value = process.argv[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`Missing value for --${name}`);
  return value;
}

const account = readArg('account');
const targetDrops = readArg('target-drops');
const output = readArg('output', 'artifacts/xrpl-payment-research.json');
const server = readArg('server', 'https://s2.ripple.com:51234/');
const maxPages = Number(readArg('max-pages', '200'));
const limit = Number(readArg('limit', '400'));

if (!account) throw new Error('--account is required');
if (!targetDrops || !/^\d+$/.test(targetDrops)) throw new Error('--target-drops must be an integer string');
if (!Number.isInteger(maxPages) || maxPages < 1 || maxPages > 1000) throw new Error('--max-pages must be 1..1000');
if (!Number.isInteger(limit) || limit < 10 || limit > 400) throw new Error('--limit must be 10..400');

const RIPPLE_EPOCH_MS = Date.UTC(2000, 0, 1);

function rippleTimeToIso(value) {
  if (typeof value !== 'number') return null;
  return new Date(RIPPLE_EPOCH_MS + value * 1000).toISOString();
}

function unwrap(entry) {
  const tx = entry.tx_json ?? entry.tx ?? entry;
  const meta = entry.meta ?? entry.metaData ?? null;
  const hash = entry.hash ?? tx?.hash ?? tx?.Hash ?? null;
  const ledgerIndex = entry.ledger_index ?? tx?.ledger_index ?? tx?.inLedger ?? null;
  const closeTimeIso = entry.close_time_iso ?? rippleTimeToIso(tx?.date);
  return { tx, meta, hash, ledgerIndex, closeTimeIso };
}

function amountDrops(value) {
  if (typeof value === 'string' && /^\d+$/.test(value)) return value;
  return null;
}

function deliveredDrops(meta) {
  const value = meta?.delivered_amount ?? meta?.DeliveredAmount;
  return amountDrops(value);
}

async function callAccountTx(marker = undefined) {
  const params = {
    account,
    ledger_index_min: -1,
    ledger_index_max: -1,
    binary: false,
    forward: true,
    limit,
    api_version: 2,
  };
  if (marker !== undefined) params.marker = marker;

  const response = await fetch(server, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'user-agent': 'crypto-yield-archive-xrpl-research/1.0',
    },
    body: JSON.stringify({ method: 'account_tx', params: [params] }),
    signal: AbortSignal.timeout(30_000),
  });

  if (!response.ok) throw new Error(`XRPL server HTTP ${response.status}`);
  const body = await response.json();
  const result = body.result;
  if (!result || result.status === 'error' || body.error) {
    throw new Error(`XRPL account_tx error: ${JSON.stringify(body).slice(0, 1000)}`);
  }
  if (!Array.isArray(result.transactions)) {
    throw new Error(`XRPL account_tx missing transactions: ${JSON.stringify(body).slice(0, 1000)}`);
  }
  return result;
}

const transactions = [];
let marker;
let pageCount = 0;
let ledgerMin = null;
let ledgerMax = null;

for (;;) {
  if (pageCount >= maxPages) throw new Error(`Reached max page limit (${maxPages}) before history ended`);
  const result = await callAccountTx(marker);
  pageCount += 1;
  ledgerMin ??= result.ledger_index_min ?? null;
  ledgerMax = result.ledger_index_max ?? ledgerMax;
  transactions.push(...result.transactions.map(unwrap));
  marker = result.marker;
  if (marker === undefined || marker === null) break;
}

const inboundPayments = transactions.filter(({ tx }) =>
  tx?.TransactionType === 'Payment' &&
  tx?.Destination === account &&
  tx?.Account &&
  tx?.Account !== account
);

const exactMatches = inboundPayments.filter(({ tx, meta }) => {
  const requested = amountDrops(tx?.Amount);
  const delivered = deliveredDrops(meta);
  return requested === targetDrops || delivered === targetDrops;
});

const normalizedMatches = exactMatches.map((entry) => {
  const { tx, meta, hash, ledgerIndex, closeTimeIso } = entry;
  const sender = tx?.Account ?? null;
  const relatedOutbound = transactions
    .filter(({ tx: candidate }) =>
      candidate?.TransactionType === 'Payment' &&
      candidate?.Account === account &&
      sender && candidate?.Destination === sender
    )
    .map(({ tx: candidate, meta: candidateMeta, hash: candidateHash, ledgerIndex: candidateLedger, closeTimeIso: candidateTime }) => ({
      hash: candidateHash,
      ledger_index: candidateLedger,
      close_time_iso: candidateTime,
      destination: candidate?.Destination ?? null,
      destination_tag: candidate?.DestinationTag ?? null,
      amount_drops: amountDrops(candidate?.Amount),
      delivered_amount_drops: deliveredDrops(candidateMeta),
      transaction_result: candidateMeta?.TransactionResult ?? null,
    }));

  return {
    hash,
    ledger_index: ledgerIndex,
    close_time_iso: closeTimeIso,
    sender,
    destination: tx?.Destination ?? null,
    destination_tag: tx?.DestinationTag ?? null,
    amount_drops: amountDrops(tx?.Amount),
    delivered_amount_drops: deliveredDrops(meta),
    transaction_result: meta?.TransactionResult ?? null,
    related_outbound_payments_to_sender: relatedOutbound,
  };
});

const report = {
  generated_at: new Date().toISOString(),
  source: {
    method: 'account_tx',
    server,
    api_version: 2,
    account,
    ledger_index_min: ledgerMin,
    ledger_index_max: ledgerMax,
    pages: pageCount,
    transactions_scanned: transactions.length,
  },
  query: {
    target_drops: targetDrops,
    target_xrp: Number(BigInt(targetDrops)) / 1_000_000,
  },
  result: {
    inbound_payments_scanned: inboundPayments.length,
    exact_match_count: normalizedMatches.length,
    exact_matches: normalizedMatches,
  },
  caveats: [
    'This report only reflects transactions returned by the queried XRPL full-history server for the specified account.',
    'An exact amount match does not by itself prove ownership, user identity, or the off-chain account narrative.',
    'Absence of a corresponding outbound payment does not by itself prove that no withdrawal was attempted or owed.',
  ],
};

await fs.mkdir(path.dirname(output), { recursive: true });
await fs.writeFile(output, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(report, null, 2));
