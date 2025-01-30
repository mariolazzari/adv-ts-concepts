export class User {
  constructor(public name: string, public age: number) {}

  serialize() {
    return JSON.stringify({ name: this.name, age: this.age });
  }
}

// default values
export class SomeList<T = string> {
  private readonly list: T[] = [];

  add(t: T) {
    this.list.push(t);
  }
}

export interface AppConfig {
  debug: boolean;
  logLevel: "info" | "warning" | "error";
  port: number;
}

export class CreateClass<T> {
  create(type: { new (): T }): T {
    return new type();
  }
}

export class Dog {
  name: string;

  constructor() {
    this.name = "Mario";
  }
}
