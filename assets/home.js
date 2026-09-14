(() => {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("in"));
    return;
  }

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
})();
