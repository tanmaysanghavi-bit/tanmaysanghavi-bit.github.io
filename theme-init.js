// Runs before first paint. Order: the visitor's saved choice, then the admin's default, then the OS setting.
(function () {
  var root = document.documentElement
  var mode
  try { mode = localStorage.getItem('tanmay-theme') } catch (e) { /* storage blocked */ }
  if (mode !== 'light' && mode !== 'dark') {
    var admin = root.getAttribute('data-default-theme')
    mode = admin === 'light' || admin === 'dark' ? admin
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  root.setAttribute('data-theme', mode)
})()
