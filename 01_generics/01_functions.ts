// generic functions
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

// generic classes
class KeyValuePair<K, V> {
  private key: K;
  private value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  displayPair(): void {
    console.log(`${this.key} = ${this.value}`);
  }
}

const pain = new KeyValuePair<string, string>("url", "mariolazzari.it");

class Queue<T> {
  private storage: T[] = [];

  enqueue(item: T): void {
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  peek(): T | undefined {
    return this.storage?.[0];
  }
}

// generic interfaces
interface Pair<K, V> {
  key: K;
  value: V;
}

const config: Pair<string, string> = {
  key: "url",
  value: "mario",
};

interface MyResponse<T> {
  data: T;
  status: number;
  message: string;
}

function createResponse<T>(
  data: T,
  status: number,
  message: string
): MyResponse<T> {
  return { data, status, message };
}

const stringRes = createResponse<string>("My test", 200, "OK");
const numberRes = createResponse<number[]>([1, 2, 3], 200, "OK");

interface Printer<T> {
  print(value: T): void;
}

class ElementHolder<T> implements Printer<T> {
  private values: T[] = [];

  constructor(values: T[]) {
    this.values = values;
  }

  add(value: T) {
    this.values.push(value);
  }

  remove(value: T) {
    this.values = this.values.filter(v => v !== value);
  }

  print(value: T): void {
    console.log(value);
  }

  printAll() {
    this.values.forEach(val => this.print(val));
  }
}

const holder = new ElementHolder<string>(["uno", "due", "tre"]);
holder.printAll();

holder.add("zero");
holder.printAll();

holder.remove("zero");
holder.printAll();
