const values = {};

function useValue(key) {
  return values[key];
}

function setValue(key, value) {
  values[key] = value;
}

export { useValue, setValue };
