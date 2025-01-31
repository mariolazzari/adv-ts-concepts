import { Task } from "./interfaces";

export type Status = "actinve" | "inactive" | "pending";

export type TodoPreview = Pick<Task, "title" | "completed">;

export type TodoInfo = Omit<Task, "completed">;

export type Drink = "coffee" | "tea" | "water" | "soda";

export type NonCaffeinated = Exclude<Drink, "coffee" | "tea">;

export type SomeDrink = Extract<Drink, "coffee" | "tea">;

export type MaybeString = string | null | undefined;

export type JustString = NonNullable<MaybeString>;
