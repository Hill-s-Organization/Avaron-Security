// DMCA.com site verification + badge (loaded sitewide)
(function () {
  // Inject DMCA site verification meta tag
  if (!document.querySelector('meta[name="dmca-site-verification"]')) {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'dmca-site-verification');
    meta.setAttribute('content', 'Q2t5SzBLNlZDMTcyZlAvT0t4ai9Pa0lxdW5seVZwK1JlLzhZMHZSckxFbz01');
    document.head.appendChild(meta);
  }

  // Load DMCA badge helper script
  var script = document.createElement('script');
  script.src = 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js';
  script.async = true;
  document.head.appendChild(script);

  // Inject a large DMCA badge banner at the very top of every page
  function insertBadge() {
    if (document.getElementById('dmca-top-banner')) return;

    var banner = document.createElement('div');
    banner.id = 'dmca-top-banner';
    banner.style.cssText = [
      'width:100%',
      'display:flex',
      'justify-content:center',
      'align-items:center',
      'padding:10px 16px',
      'background:#ffffff',
      'border-bottom:1px solid #e5e7eb',
      'position:relative',
      'z-index:9999'
    ].join(';');

    banner.innerHTML =
      '<a href="//www.dmca.com/Protection/Status.aspx?ID=1a6810fc-d958-4f0f-b357-18a7ffaa9bdd" ' +
      'title="DMCA.com Protection Status" class="dmca-badge" target="_blank" rel="noopener">' +
      '<img src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-05.png?ID=1a6810fc-d958-4f0f-b357-18a7ffaa9bdd" ' +
      'alt="DMCA.com Protection Status" style="height:40px;width:auto;display:block;" />' +
      '</a>';

    document.body.insertBefore(banner, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBadge);
  } else {
    insertBadge();
  }
})();
