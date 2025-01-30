import { Printer } from "./interfaces";

// generic classes
export class KeyValuePair<K, V> {
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

export class Queue<T> {
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

export class ElementHolder<T> implements Printer<T> {
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
