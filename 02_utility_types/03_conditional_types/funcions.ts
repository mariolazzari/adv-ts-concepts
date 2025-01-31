import { ApiResponse, InputType, Reply } from "./types";

export function processInput<T extends InputType>(type: T, input: Reply<T>) {
  console.log(`Processing ${type} input: ${input}`);
}

export function fetchUser<Status extends "success" | "error">(
  status: Status
): ApiResponse<Status> {
  if (status === "success") {
    return {
      name: "Mario",
      email: "emal",
    } as ApiResponse<Status>;
  }

  return {
    code: 404,
    message: "User not found",
  } as ApiResponse<Status>;
}
