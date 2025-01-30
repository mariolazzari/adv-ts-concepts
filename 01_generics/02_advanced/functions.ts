export function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

export function processSerializable<T extends { serialize: () => string }>(
  item: T
) {
  console.log(item.serialize());
}

export function wrapInArray<T>(item: T, multiple: boolean): T | T[] {
  return multiple ? [item] : item;
}

// generic type as constraint of another generic type
export function getConfigValue<Type, Key extends keyof Type>(
  config: Type,
  key: Key
) {
  return config[key];
}
