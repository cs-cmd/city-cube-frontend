const handlers = {};

function useHandler(key, handler) {
  if (handlers[key] === undefined) {
    handlers[key] = handler;
  }
  return handlers[key];
}
export { useHandler };
