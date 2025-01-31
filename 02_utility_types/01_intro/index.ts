import { MyClass } from "./classes";
import { configureSettings, updateTask } from "./functions";
import { Task, User } from "./interfaces";
import {
  JustString,
  NonCaffeinated,
  SomeDrink,
  Status,
  TodoInfo,
  TodoPreview,
} from "./types";

// Partial<T>
const task: Task = {
  title: "First",
  description: "My first task",
  completed: false,
};

const updatedTask = updateTask(task, { completed: true });
console.log("Task", task);
console.log("Updated Task", updatedTask);

// Required<T>
const appSettings = configureSettings({ name: "Mario", age: 50 });
console.log("App setttings", appSettings);

// Readonly<T>
const user: Readonly<User> = {
  id: 1,
  name: "Mario",
};
console.log(user);
// user.name = "ciao" -> error

// Record<K,V>
const userStatus: Record<number, Status> = {
  1: "actinve",
  2: "inactive",
  3: "pending",
};
console.log("User status 1:", userStatus[1]);

// Pick<T,...>
const todoPreview: TodoPreview = {
  title: "Todo",
  completed: true,
};
console.log("Todo preview", todoPreview);

// Omit<T,...>
const todoInfo: TodoInfo = {
  title: "Todo",
  description: "Todo info",
};
console.log("Todo info", todoInfo);

// Exclude<T,...>
const water: NonCaffeinated = "water";
console.log("Water", water);

// Extract<T,...>
const someDrink: SomeDrink = "tea";
console.log("Tea", someDrink);

// NonNullable<T>
const str: JustString = "just string";
console.log(str);

// ReturnType<T>
type UpdateTask = ReturnType<typeof updateTask>;

const updTask: UpdateTask = {
  title: "Returned task",
  description: "...",
  completed: true,
};
console.log("UpdateTask type:", updTask);

// InstanceType<T>
type ClassInstance = InstanceType<typeof MyClass>;
const myClass: ClassInstance = {
  x: 1,
  y: 2,
};
console.log("myClass:", myClass);

// Parameters<T>
type UpdateTaskParams = Parameters<typeof updateTask>;

// Constructor<T>
type MyClassCOnstructor = ConstructorParameters<typeof MyClass>;
