export default () => {
  if ("addEventListener" in window) return;
  window.addEventListener = (type, cb) => {
    window.attachEvent(`on${type}`, cb);
  };
};
