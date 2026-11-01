(function () {
  const key = "sachin-blog-theme";
  const saved = localStorage.getItem(key);
  const initial = saved === "light" || saved === "dark"
    ? saved
    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = initial;

  function setupToggle() {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      function update() {
        const theme = document.documentElement.dataset.theme;
        button.textContent = theme === "dark" ? "light mode" : "dark mode";
        button.setAttribute("aria-label", "switch to " + (theme === "dark" ? "light" : "dark") + " mode");
        button.setAttribute("aria-pressed", String(theme === "dark"));
      }
      button.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        localStorage.setItem(key, next);
        update();
      });
      update();
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupToggle);
  } else {
    setupToggle();
  }
})();
