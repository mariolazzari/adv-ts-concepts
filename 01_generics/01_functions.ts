function printString(str: string) {
  console.log(str);
  return str;
}

function printGeneric<T>(arg: T): T {
  console.log(arg);
  return arg;
}

let value = printGeneric<string>("ciao");
// type inference
value = printGeneric("Mario");

function getFirst<T>(arg: T[]): T {
  return arg[0];
}

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  // return [...arr1, ...arr2];
  return arr1.concat(arr2);
}
