// generic interfaces
export interface Pair<K, V> {
  key: K;
  value: V;
}

export interface MyResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface Printer<T> {
  print(value: T): void;
}
