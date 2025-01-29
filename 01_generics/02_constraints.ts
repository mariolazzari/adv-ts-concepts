function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

logLength([0, 1, 2]);
logLength("Mario");
// logLength(1) -> error
