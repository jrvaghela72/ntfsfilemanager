// Shared behaviour for every page: mobile menu, scroll reveal, and GA4 CTA events.
(() => {
  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Scroll reveal
  const nodes = document.querySelectorAll(".reveal");
  if (nodes.length) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
      nodes.forEach((el) => io.observe(el));
    }
  }

  // GA4: named events for the links that matter, so they can be marked as key events.
  // <a data-ga="play_store_click" data-ga-location="hero">
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-ga]");
    if (!link || typeof gtag !== "function") return;
    gtag("event", link.dataset.ga, {
      link_location: link.dataset.gaLocation || "unknown",
      link_url: link.href || "",
      page_path: location.pathname
    });
  });
})();
