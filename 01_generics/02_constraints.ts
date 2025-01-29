function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

logLength([0, 1, 2]);
logLength("Mario");
// logLength(1) -> error

function processSerializable<T extends { serialize: () => string }>(item: T) {
  console.log(item.serialize());
}

class User {
  constructor(public name: string, public age: number) {}

  serialize() {
    return JSON.stringify({ name: this.name, age: this.age });
  }
}

const user = new User("Mario", 50);
console.log(user.serialize());

function wrapInArray<T>(item: T, multiple: boolean): T | T[] {
  return multiple ? [item] : item;
}

// default values
class SomeList<T = string> {
  private readonly list: T[] = [];

  add(t: T) {
    this.list.push(t);
  }
}

const list = new SomeList();
list.add("mario");
list.add("lazzari");

interface AppConfig {
  debug: boolean;
  logLevel: "info" | "warning" | "error";
  port: number;
}

// generic type as constraint of another generic type
function getConfigValue<Type, Key extends keyof Type>(config: Type, key: Key) {
  return config[key];
}

const appConfig: AppConfig = {
  debug: false,
  logLevel: "info",
  port: 8080,
};

const logLevel = getConfigValue(appConfig, "logLevel");
const appPort = getConfigValue(appConfig, "port");
console.log(logLevel, appPort);

class CreateClass<T> {
  create(type: { new (): T }): T {
    return new type();
  }
}

class Dog {
  name: string;

  constructor() {
    this.name = "Mario";
  }
}

const creator = new CreateClass<Dog>();
const myDog = creator.create(Dog);
console.log(myDog.name);
