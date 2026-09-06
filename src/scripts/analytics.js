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
      const evidenceContext = Boolean(target.closest('.evidence-row, .event-sources'));

      if (/web\.archive\.org/i.test(href) || /archived version/i.test(text) || target.classList.contains('archive-link')) {
        send('archive_click', { link_url: href, page_path: path });
      } else if (/\/corrections\/?(?:[?#].*)?$/.test(href)) {
        send('correction_click', { page_path: path });
      } else if (/^https?:\/\//i.test(href) && !href.includes('cya.badjoke-lab.com')) {
        send(evidenceContext ? 'outbound_evidence_click' : 'outbound_link_click', {
          link_url: href,
          page_path: path,
        });
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

  const searchTimers = new WeakMap();
  document.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.type !== 'search' && !/search/i.test(`${target.id} ${target.name} ${target.placeholder}`)) return;

    const previousTimer = searchTimers.get(target);
    if (previousTimer) clearTimeout(previousTimer);

    const timer = setTimeout(() => {
      const queryLength = target.value.trim().length;
      if (queryLength < 2) return;
      send('registry_search', { search_length: queryLength, page_path: path });
    }, 700);
    searchTimers.set(target, timer);
  });
})();
