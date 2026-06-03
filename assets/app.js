const DATA_PATHS = {
  platforms: '/data/platforms.json',
  events: '/data/events.json',
  evidence: '/data/evidence.json',
  outcomes: '/data/outcomes.json',
  products: '/data/products.json',
  termsRisk: '/data/terms-risk.json',
};

const app = document.querySelector('#app');

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function year(value) {
  if (!value) return '—';
  return String(value).slice(0, 4);
}

function formatYears(platform) {
  const start = year(platform.launch_date);
  const end = platform.end_date ? year(platform.end_date) : '';
  if (start === '—' && !end) return '—';
  return `${start}${end ? `–${end}` : '–'}`;
}

function chip(value, extra = '') {
  if (!value) return '<span class="muted">—</span>';
  const safe = escapeHtml(value);
  return `<span class="chip ${escapeHtml(value)} ${extra}">${safe}</span>`;
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  const json = await response.json();
  if (!Array.isArray(json)) throw new Error(`${path} must be an array`);
  return json;
}

async function loadData() {
  const [platforms, events, evidence, outcomes, products, termsRisk] = await Promise.all([
    fetchJson(DATA_PATHS.platforms),
    fetchJson(DATA_PATHS.events),
    fetchJson(DATA_PATHS.evidence),
    fetchJson(DATA_PATHS.outcomes),
    fetchJson(DATA_PATHS.products),
    fetchJson(DATA_PATHS.termsRisk),
  ]);
  return { platforms, events, evidence, outcomes, products, termsRisk };
}

function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === path || (href !== '/' && path.startsWith(href)));
  });
}

function renderShell(title, eyebrow, body) {
  app.innerHTML = `
    <section class="panel hero-panel">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h1>${escapeHtml(title)}</h1>
      ${body}
    </section>
  `;
}

function outcomeFor(platform, data) {
  return data.outcomes.find((item) => item.platform_id === platform.id);
}

function renderHome(data) {
  const counts = {
    platforms: data.platforms.length,
    events: data.events.length,
    evidence: data.evidence.length,
    outcomes: data.outcomes.length,
  };

  app.innerHTML = `
    <section class="panel hero-panel">
      <p class="eyebrow">Historical registry · v0 foundation</p>
      <h1>What happened after users deposited assets into crypto yield platforms?</h1>
      <p>
        Crypto Yield Archive tracks lending, Earn, and yield platforms by platform history, customer outcome, terms risk, failure chain, and evidence. It is not an APY ranking or investment recommendation site.
      </p>
      <div class="summary-grid">
        ${stat('Platforms', counts.platforms)}
        ${stat('Events', counts.events)}
        ${stat('Evidence', counts.evidence)}
        ${stat('Outcomes', counts.outcomes)}
      </div>
    </section>

    <section class="panel" style="margin-top: 18px;">
      <div class="controls">
        <input id="search" class="field search" placeholder="Search platform, alias, domain…" />
        <select id="statusFilter" class="field">
          <option value="">All status</option>
          <option value="active">active</option>
          <option value="limited">limited</option>
          <option value="withdrawals_suspended">withdrawals_suspended</option>
          <option value="restructuring">restructuring</option>
          <option value="bankrupt">bankrupt</option>
          <option value="operations_ended">operations_ended</option>
          <option value="unknown">unknown</option>
        </select>
        <select id="outcomeFilter" class="field">
          <option value="">All outcomes</option>
          <option value="full_repayment">full_repayment</option>
          <option value="partial_repayment">partial_repayment</option>
          <option value="claims_ongoing">claims_ongoing</option>
          <option value="no_recovery">no_recovery</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Failure reason</th>
              <th>Customer outcome</th>
              <th>Years</th>
              <th>Domain</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody id="platformRows"></tbody>
        </table>
      </div>
    </section>
  `;

  const rows = document.querySelector('#platformRows');
  const search = document.querySelector('#search');
  const statusFilter = document.querySelector('#statusFilter');
  const outcomeFilter = document.querySelector('#outcomeFilter');

  function draw() {
    const q = search.value.trim().toLowerCase();
    const status = statusFilter.value;
    const outcome = outcomeFilter.value;

    const filtered = data.platforms.filter((platform) => {
      const out = outcomeFor(platform, data);
      const haystack = [
        platform.canonical_name,
        platform.slug,
        platform.official_domain_original,
        ...(platform.aliases || []),
      ].join(' ').toLowerCase();
      if (q && !haystack.includes(q)) return false;
      if (status && platform.status !== status) return false;
      if (outcome && out?.outcome_status !== outcome) return false;
      return true;
    });

    rows.innerHTML = filtered.length
      ? filtered.map((platform) => row(platform, outcomeFor(platform, data))).join('')
      : '<tr><td colspan="8" class="empty">No platform records match these filters. Add records under data/platforms.json.</td></tr>';
  }

  search.addEventListener('input', draw);
  statusFilter.addEventListener('change', draw);
  outcomeFilter.addEventListener('change', draw);
  draw();
}

function stat(label, value) {
  return `<div class="stat"><div class="label">${escapeHtml(label)}</div><div class="value">${escapeHtml(value)}</div></div>`;
}

function row(platform, outcome) {
  return `
    <tr>
      <td class="name-cell">
        <a href="/platform/?slug=${encodeURIComponent(platform.slug)}"><strong>${escapeHtml(platform.canonical_name)}</strong></a>
        <small>${escapeHtml((platform.aliases || []).join(', ') || platform.slug || '')}</small>
      </td>
      <td>${chip(platform.type)}</td>
      <td>${chip(platform.status)}</td>
      <td>${chip(platform.failure_reason || '—')}</td>
      <td>${chip(outcome?.outcome_status || 'unknown')}</td>
      <td>${escapeHtml(formatYears(platform))}</td>
      <td>${escapeHtml(platform.official_domain_original || '—')}</td>
      <td>${platform.archived_url ? `<a class="archive-link" href="${escapeHtml(platform.archived_url)}">Archive</a>` : '<span class="muted">—</span>'}</td>
    </tr>
  `;
}

function renderPlatform(data) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || window.location.pathname.split('/').filter(Boolean).at(1);
  const platform = data.platforms.find((item) => item.slug === slug);

  if (!platform) {
    renderShell('Platform not found', 'Record detail', '<p>No matching platform record exists yet. Add one to <code>data/platforms.json</code>.</p>');
    return;
  }

  const events = data.events.filter((item) => item.platform_id === platform.id);
  const evidence = data.evidence.filter((item) => item.platform_id === platform.id);
  const outcome = outcomeFor(platform, data);
  const products = data.products.filter((item) => item.platform_id === platform.id);
  const terms = data.termsRisk.find((item) => item.platform_id === platform.id);

  app.innerHTML = `
    <section class="panel hero-panel">
      <p class="eyebrow">Platform dossier</p>
      <h1>${escapeHtml(platform.canonical_name)}</h1>
      <p>${escapeHtml(platform.summary || 'No summary has been added yet.')}</p>
      <div>${chip(platform.type)} ${chip(platform.status)} ${chip(platform.failure_reason || 'unknown')}</div>
    </section>

    <section class="grid two-col" style="margin-top: 18px;">
      <div class="detail-stack">
        ${detailCard('What happened?', platform.what_happened || platform.summary || 'No narrative summary has been added yet.')}
        ${detailCard('Customer funds', outcome?.notes || 'Customer outcome has not been researched yet.')}
        ${detailCard('Terms risk', terms?.notes || 'Terms risk has not been researched yet.')}
        ${detailCard('Uncertainty', platform.uncertainty_notes || 'Uncertainty notes have not been added yet.')}
        ${listCard('Timeline', events, eventItem)}
        ${listCard('Evidence dossier', evidence, evidenceItem)}
      </div>
      <aside class="panel card">
        <h2>Facts</h2>
        <div class="fact-grid">
          ${fact('Launch', platform.launch_date || '—')}
          ${fact('End', platform.end_date || '—')}
          ${fact('Origin', platform.country_or_origin || '—')}
          ${fact('Confidence', platform.confidence || '—')}
          ${fact('Domain', platform.official_domain_original || '—')}
          ${fact('URL status', platform.official_url_status || '—')}
        </div>
        <h3 style="margin-top:18px;">Products</h3>
        ${products.length ? products.map((item) => `<p>${escapeHtml(item.product_name || item.product_type)} · ${escapeHtml(item.product_type || '')}</p>`).join('') : '<p>No product profiles yet.</p>'}
      </aside>
    </section>
  `;
}

function detailCard(title, text) {
  return `<section class="panel card"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></section>`;
}

function listCard(title, items, renderItem) {
  return `<section class="panel card"><h2>${escapeHtml(title)}</h2>${items.length ? items.map(renderItem).join('') : '<p>No records yet.</p>'}</section>`;
}

function eventItem(item) {
  return `<div class="fact" style="margin-bottom:10px;"><div class="k">${escapeHtml(item.event_date || 'unknown')} · ${escapeHtml(item.event_type || 'event')}</div><div class="v"><strong>${escapeHtml(item.title || 'Untitled event')}</strong><p>${escapeHtml(item.description || '')}</p></div></div>`;
}

function evidenceItem(item) {
  const title = escapeHtml(item.title || item.url || 'Untitled source');
  return `<div class="fact" style="margin-bottom:10px;"><div class="k">${escapeHtml(item.source_type || 'source')} · ${escapeHtml(item.reliability || 'unknown')}</div><div class="v"><a class="archive-link" href="${escapeHtml(item.url || '#')}">${title}</a><p>${escapeHtml(item.publisher || '')}</p></div></div>`;
}

function fact(label, value) {
  return `<div class="fact"><div class="k">${escapeHtml(label)}</div><div class="v">${escapeHtml(value)}</div></div>`;
}

function renderOutcomes(data) {
  const groups = ['full_repayment', 'partial_repayment', 'claims_ongoing', 'no_recovery', 'unknown', 'not_applicable'];
  renderGroupedPage('Customer outcomes', 'Cross-platform view of what happened to customer funds.', groups, data, (platform) => outcomeFor(platform, data)?.outcome_status || 'unknown');
}

function renderBankruptcy(data) {
  const platforms = data.platforms.filter((platform) => ['bankrupt', 'restructuring'].includes(platform.status));
  app.innerHTML = `
    <section class="panel hero-panel"><p class="eyebrow">Bankruptcy & restructuring</p><h1>Bankruptcy cases</h1><p>Major restructuring and bankruptcy-heavy platform records.</p></section>
    <section class="panel card" style="margin-top:18px;">${platforms.length ? platforms.map((p) => `<p><a class="archive-link" href="/platform/?slug=${encodeURIComponent(p.slug)}">${escapeHtml(p.canonical_name)}</a> · ${escapeHtml(p.status)}</p>`).join('') : '<p>No bankruptcy or restructuring records yet.</p>'}</section>
  `;
}

function renderGroupedPage(title, intro, groups, data, classifier) {
  const sections = groups.map((group) => {
    const platforms = data.platforms.filter((platform) => classifier(platform) === group);
    return `<section class="panel card"><h2>${escapeHtml(group)}</h2>${platforms.length ? platforms.map((p) => `<p><a class="archive-link" href="/platform/?slug=${encodeURIComponent(p.slug)}">${escapeHtml(p.canonical_name)}</a></p>`).join('') : '<p>No records yet.</p>'}</section>`;
  }).join('');
  app.innerHTML = `<section class="panel hero-panel"><p class="eyebrow">Registry view</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(intro)}</p></section><div class="grid" style="margin-top:18px;">${sections}</div>`;
}

function renderMethodology() {
  app.innerHTML = `
    <section class="panel hero-panel">
      <p class="eyebrow">Definitions</p>
      <h1>Methodology</h1>
      <p>CYA counts platform entities in v0. It preserves uncertainty, separates status from failure reason, and prioritizes evidence-backed records.</p>
    </section>
    <section class="panel card" style="margin-top:18px;">
      <h2>Core rules</h2>
      <p>v0 includes CeFi lending and yield platforms only. Exchange Earn, DeFi lending, yield aggregators, pools, vaults, and deployments are deferred.</p>
      <p>Each public record should include customer outcome, terms risk, failure chain, and evidence. Unknown values should explain what remains unknown.</p>
    </section>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <section class="panel hero-panel">
      <p class="eyebrow">About</p>
      <h1>About Crypto Yield Archive</h1>
      <p>Crypto Yield Archive is a quiet historical registry of crypto lending, Earn, and yield platforms. It tracks what happened to platforms and customer funds over time.</p>
    </section>
    <section class="panel card" style="margin-top:18px;">
      <h2>What it is not</h2>
      <p>It is not an investment recommendation site, APY ranking, or trading tool.</p>
    </section>
  `;
}

async function main() {
  setActiveNav();
  try {
    const data = await loadData();
    const path = window.location.pathname;
    if (path.startsWith('/platform/')) return renderPlatform(data);
    if (path.startsWith('/outcomes/')) return renderOutcomes(data);
    if (path.startsWith('/bankruptcy-cases/')) return renderBankruptcy(data);
    if (path.startsWith('/methodology/')) return renderMethodology();
    if (path.startsWith('/about/')) return renderAbout();
    renderHome(data);
  } catch (error) {
    renderShell('Data loading error', 'Static JSON', `<p>${escapeHtml(error.message)}</p>`);
  }
}

main();
