import { MyResponse } from "./interfaces";

// generic functions
export function printString(str: string) {
  console.log(str);
  return str;
}

export function printGeneric<T>(arg: T): T {
  console.log(arg);
  return arg;
}

export function getFirst<T>(arg: T[]): T {
  return arg[0];
}

export function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  // return [...arr1, ...arr2];
  return arr1.concat(arr2);
}

export function createResponse<T>(
  data: T,
  status: number,
  message: string
): MyResponse<T> {
  return { data, status, message };
}
