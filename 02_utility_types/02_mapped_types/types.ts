import { Person } from "./intrfaces";

export type OptionalPerson = {
  [Property in keyof Person]?: Person[Property];
};

export type ReadonlyPerson = {
  readonly [Property in keyof Person]: Person[Property];
};

export type StringPerson = {
  [Key in keyof Person]: string;
};

export type NullablePerson = {
  [Key in keyof Person]: Person[Key] | null;
};

export type StringProps<T> = {
  [Key in keyof T as T[Key] extends string ? Key : never]: T[Key];
};
