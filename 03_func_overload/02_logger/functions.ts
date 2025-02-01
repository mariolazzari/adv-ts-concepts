import { User } from "./interfaces";

export function log(param1: string | Error, param2?: Error): void {
  switch (true) {
    case typeof param1 === "string" && param2 instanceof Error:
      console.error(`Error: ${param1}`, param2);
      break;

    case param1 instanceof Error:
      console.error(param1);
      break;

    default:
      console.error(param1);
  }
}

export function getUser(
  param1: number | string,
  param2?: string
): Partial<User> {
  switch (true) {
    case typeof param1 === "number" && !!param2:
      console.log(`Fetchng user by id ${param1} and username ${param2}`);
      return {
        id: param1,
        username: param2,
      };

    case typeof param1 === "number":
      console.log(`Fetchng user by id ${param1}`);
      return {
        id: param1,
      };

    default:
      console.log(`Fetchng user by username ${param1}`);
      return {
        username: param1,
      };
  }
}
