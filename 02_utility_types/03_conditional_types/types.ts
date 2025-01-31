import { ApiError, User } from "./interfaces";

export type CheckString<T> = T extends string ? T : "Not string";
export type TypeA = CheckString<string>;
export type TypeB = CheckString<number>;

export type ValidTypes = string | number | boolean;
export type StringOrNumberOrBoolean<T> = T extends ValidTypes ? T : never;

export type FilteredType = StringOrNumberOrBoolean<string | boolean | null>;

export type NestedConditional<T> = T extends number
  ? "Number"
  : T extends string
  ? "String"
  : "Other";

export type Test1 = NestedConditional<string>;
export type Test2 = NestedConditional<boolean>;

export type InputType = "text" | "number";
export type Reply<T extends InputType> = T extends "text" ? string[] : number[];

export type ApiResponse<Status extends "success" | "error"> =
  Status extends "success" ? User : ApiError;
