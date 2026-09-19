// DMCA.com site verification + badge helper (loaded sitewide)
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
})();
