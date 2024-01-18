const values = {};

function useValue(key, defaultValue) {
  if (defaultValue !== undefined) {
    values[key] = defaultValue;
  }

  return values[key];
}

export { useValue };
