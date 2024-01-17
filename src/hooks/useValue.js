const values = {};

function setValue(key, value) {
  values[key] = value;
}

function useValue(key) {
  return values[key];
}

export { setValue, useValue };
