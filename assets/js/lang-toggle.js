(function () {
  var STORAGE_KEY = "site-lang";

  function currentLang() {
    return document.documentElement.getAttribute("data-lang") === "zh" ? "zh" : "en";
  }

  function setLang(lang) {
    lang = lang === "zh" ? "zh" : "en";
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    var link = document.getElementById("lang-toggle-link");
    if (link) {
      link.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
      link.setAttribute("title", lang === "zh" ? "English" : "中文");
    }
  }

  function toggleLang(event) {
    if (event) event.preventDefault();
    setLang(currentLang() === "zh" ? "en" : "zh");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var link = document.getElementById("lang-toggle-link");
    if (link) {
      link.addEventListener("click", toggleLang);
    }
    setLang(currentLang());
  });
})();
