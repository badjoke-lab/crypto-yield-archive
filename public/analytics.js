(() => {
  if (typeof window === 'undefined') return;

  const send = (name, params = {}) => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, {
      transport_type: 'beacon',
      ...params,
    });
  };

  const path = window.location.pathname;
  if (path.startsWith('/platform/')) {
    const slug = path.split('/').filter(Boolean)[1] || 'unknown';
    send('platform_view', { platform_slug: slug });
  }

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('a,button') : null;
    if (!target) return;

    if (target instanceof HTMLAnchorElement) {
      const href = target.getAttribute('href') || '';
      const text = (target.textContent || '').trim().slice(0, 120);

      if (/web\.archive\.org/i.test(href) || /archived version/i.test(text)) {
        send('archive_click', { link_url: href, link_text: text });
      } else if (/\/corrections\/?$/.test(href)) {
        send('correction_click', { link_url: href, link_text: text });
      } else if (/^https?:\/\//i.test(href) && !href.includes('cya.badjoke-lab.com')) {
        send('outbound_evidence_click', { link_url: href, link_text: text });
      }
    }

    if (target instanceof HTMLButtonElement && /clear/i.test(target.textContent || '')) {
      send('filter_clear', { page_path: path });
    }
  });

  document.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    send('filter_change', {
      filter_id: target.id || target.name || 'unknown',
      filter_value: target.value || 'all',
      page_path: path,
    });
  });

  document.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.type !== 'search' && !/search/i.test(`${target.id} ${target.name} ${target.placeholder}`)) return;
    clearTimeout(target.__cyaSearchTimer);
    target.__cyaSearchTimer = setTimeout(() => {
      const query = target.value.trim();
      if (query.length < 2) return;
      send('registry_search', { search_term: query.slice(0, 100), page_path: path });
    }, 700);
  });
})();
