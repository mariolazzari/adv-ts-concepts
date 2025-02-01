import { UserInfo } from "./types";

const jsonString = '{"name": "Mario", "age": 50}';
const { name, age }: UserInfo = JSON.parse(jsonString) as UserInfo;
console.log(`${name} is ${age}`);
