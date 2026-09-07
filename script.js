/*
  全站交互只在这个文件里：
  1. 中文 / English 切换
  2. 手机端菜单开关
  3. 页脚年份自动更新

  一般情况下不需要修改本文件。
*/

(function () {
  "use strict";

  var root = document.documentElement;
  var languageButton = document.querySelector(".language-button");
  var menuButton = document.querySelector(".menu-button");
  var navigation = document.querySelector(".main-nav");
  var yearElements = document.querySelectorAll(".current-year");

  function readSavedLanguage() {
    try {
      return window.sessionStorage.getItem("kai-zhang-language");
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.sessionStorage.setItem("kai-zhang-language", language);
    } catch (error) {
      /* 浏览器禁止本地存储时，网站仍然可以正常使用。 */
    }
  }

  function setLanguage(language) {
    var nextLanguage = language === "en" ? "en" : "zh";

    root.setAttribute("data-language", nextLanguage);
    root.setAttribute("lang", nextLanguage === "zh" ? "zh-CN" : "en");

    /*
      无论切换中英文，浏览器与 Google 使用的标题都保持：
      张开 Kai Zhang
    */
    document.title = "张开 Kai Zhang";
    saveLanguage(nextLanguage);
  }

  /*
    新打开网站时默认中文；
    同一标签页中主动切换到英文后，翻页仍保持英文。
  */
  setLanguage(readSavedLanguage() === "en" ? "en" : "zh");

  if (languageButton) {
    languageButton.addEventListener("click", function () {
      var currentLanguage = root.getAttribute("data-language");
      setLanguage(currentLanguage === "zh" ? "en" : "zh");
    });
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  yearElements.forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });
})();
