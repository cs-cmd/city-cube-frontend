const handlers = {};

function useHandler(key) {
  return handlers[key];
}
function setHandler(key, handler) {
  handlers[key] = handler;
}
export { useHandler, setHandler };
