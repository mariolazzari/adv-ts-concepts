import { getConfigValue, logLength } from "./functions";
import { SomeList, User, AppConfig, CreateClass, Dog } from "./classes";

logLength([0, 1, 2]);
logLength("Mario");
// logLength(1) -> error

const user = new User("Mario", 50);
console.log(user.serialize());

const list = new SomeList();
list.add("mario");
list.add("lazzari");

const appConfig: AppConfig = {
  debug: false,
  logLevel: "info",
  port: 8080,
};

const logLevel = getConfigValue(appConfig, "logLevel");
const appPort = getConfigValue(appConfig, "port");
console.log(logLevel, appPort);

const creator = new CreateClass<Dog>();
const myDog = creator.create(Dog);
console.log(myDog.name);
