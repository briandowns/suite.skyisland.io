// Docs viewer: loads manifest.json, fetches per-library markdown,
// renders client-side with marked.js, and provides a simple
// client-side search across all loaded doc bodies. No backend.
(function () {
  const sidebarEl = document.getElementById("docs-nav");
  const contentEl = document.getElementById("docs-content");
  const searchEl = document.getElementById("docs-search");

  let manifest = [];
  const cache = new Map(); // slug -> raw markdown text

  function slugFromHash() {
    const h = window.location.hash.replace("#", "");
    return h || (manifest[0] && manifest[0].slug);
  }

  function renderSidebar(filterText) {
    const q = (filterText || "").trim().toLowerCase();
    sidebarEl.innerHTML = "";
    const group = document.createElement("div");
    group.className = "docs-nav-group";
    const title = document.createElement("div");
    title.className = "grp-title";
    title.textContent = "Libraries";
    group.appendChild(title);

    const active = slugFromHash();
    let anyVisible = false;

    manifest.forEach((item) => {
      const hay = (item.name + " " + item.tagline).toLowerCase();
      const cachedBody = (cache.get(item.slug) || "").toLowerCase();
      const matches = !q || hay.includes(q) || cachedBody.includes(q);
      const a = document.createElement("a");
      a.href = "#" + item.slug;
      a.textContent = item.name;
      a.title = item.tagline;
      if (item.slug === active) a.classList.add("active");
      if (!matches) a.classList.add("hidden");
      else anyVisible = true;
      group.appendChild(a);
    });

    sidebarEl.appendChild(group);

    if (q && !anyVisible) {
      const none = document.createElement("p");
      none.className = "docs-empty";
      none.textContent = "No docs match “" + filterText + "”.";
      sidebarEl.appendChild(none);
    }
  }

  async function fetchDoc(item) {
    if (cache.has(item.slug)) return cache.get(item.slug);
    const res = await fetch("docs/" + item.file);
    const text = await res.text();
    cache.set(item.slug, text);
    return text;
  }

  async function preloadAll() {
    // small library, safe to preload everything so search can match
    // on body content too, not just titles.
    await Promise.all(manifest.map((item) => fetchDoc(item).catch(() => "")));
  }

  async function renderDoc(slug) {
    const item = manifest.find((m) => m.slug === slug) || manifest[0];
    if (!item) {
      contentEl.innerHTML = '<p class="docs-empty">No documentation available yet.</p>';
      return;
    }
    const md = await fetchDoc(item);
    const html = window.marked ? window.marked.parse(md) : "<pre>" + md + "</pre>";
    contentEl.innerHTML =
      '<div class="doc-meta">' +
      item.tagline +
      " · docs/" +
      item.file +
      "</div>" +
      html;
    renderSidebar(searchEl ? searchEl.value : "");
  }

  async function init() {
    const res = await fetch("docs/manifest.json");
    manifest = await res.json();
    await preloadAll();
    renderSidebar("");
    renderDoc(slugFromHash());
  }

  window.addEventListener("hashchange", () => renderDoc(slugFromHash()));
  if (searchEl) {
    searchEl.addEventListener("input", (e) => renderSidebar(e.target.value));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
