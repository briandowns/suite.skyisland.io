// Shared behavior: theme toggle + copy-to-clipboard for terminal blocks
(function () {
  const THEME_KEY = "cfoundry-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-icon]").forEach((el) => {
      el.textContent = theme === "light" ? "●" : "○";
    });
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const preferred = saved || "dark";
    applyTheme(preferred);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });

    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = document.querySelector(btn.getAttribute("data-copy"));
        if (!target) return;
        const text = target.innerText;
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.textContent;
          btn.textContent = "copied";
          setTimeout(() => (btn.textContent = original), 1400);
        });
      });
    });

    // highlight active nav link based on current page
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-nav .nav-link").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });
  });
})();
