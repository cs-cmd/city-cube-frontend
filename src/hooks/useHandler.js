const handlers = {};

function setHandler(key, handler) {
  handlers[key] = handler;
}

const useHandler = (key) => handlers[key];

export { setHandler, useHandler };
