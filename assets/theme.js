(function () {
  var THEMES = ['theme-electric', 'theme-sunset', 'theme-forest', 'theme-midnight', 'theme-paper'];
  var KEY = 'phy2-theme';

  function getPreferred() {
    try {
      var saved = localStorage.getItem(KEY);
      if (THEMES.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var body = document.body;
    for (var i = 0; i < THEMES.length; i++) {
      if (body.classList.contains(THEMES[i])) return THEMES[i];
    }
    return 'theme-electric';
  }

  function applyTheme(theme) {
    if (THEMES.indexOf(theme) === -1) theme = 'theme-electric';
    var body = document.body;
    THEMES.forEach(function (t) { body.classList.remove(t); });
    body.classList.add(theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    var select = document.getElementById('theme-select');
    if (select && select.value !== theme) select.value = theme;
  }

  function init() {
    var theme = getPreferred();
    applyTheme(theme);
    var select = document.getElementById('theme-select');
    if (select) {
      select.value = theme;
      select.addEventListener('change', function () { applyTheme(select.value); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
