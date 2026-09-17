(() => {
  const dialogs = [...document.querySelectorAll("dialog.xp-dialog")];
  if (!dialogs.length) return;

  const ids = new Set(dialogs.map((d) => d.id));

  const clearHash = () => {
    if (!ids.has(location.hash.slice(1))) return;
    history.replaceState(null, "", location.pathname + location.search);
  };

  const openFromHash = () => {
    const id = location.hash.slice(1);
    dialogs.forEach((d) => {
      if (d.open && d.id !== id) d.close();
    });
    const next = ids.has(id) ? document.getElementById(id) : null;
    if (next instanceof HTMLDialogElement && !next.open) next.showModal();
  };

  dialogs.forEach((d) => {
    d.addEventListener("click", (event) => {
      if (event.target === d) d.close();
    });
    d.addEventListener("close", () => {
      if (location.hash === "#" + d.id) clearHash();
    });
  });

  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
