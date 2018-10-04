const injectClassOnDomLoaded = (ms, className) => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add(className);
    }, ms);
  });
};

export { injectClassOnDomLoaded };
