(function () {
  const routeSelector = "a[href]:not([target]):not([download])";
  const canAnimate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.documentElement.classList.add("route-ready");

  window.addEventListener("pageshow", () => {
    document.body.classList.remove("is-leaving");
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest(routeSelector);
    if (!link || event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = new URL(link.href, window.location.href);
    const current = new URL(window.location.href);
    if (target.href === current.href) {
      event.preventDefault();
      return;
    }
    if (target.hash && target.pathname === current.pathname) return;
    if (target.protocol !== current.protocol) return;
    if (target.origin !== current.origin) return;

    event.preventDefault();
    if (!canAnimate) {
      window.location.href = target.href;
      return;
    }

    document.body.classList.add("is-leaving");
    window.setTimeout(() => {
      window.location.href = target.href;
    }, 220);
  });
})();
