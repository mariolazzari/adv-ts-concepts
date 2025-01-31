export type World = "world";
export type Greeting = `Hello ${World}`;

export type Result = "error" | "success";
export type Message<RType extends Result> = `${RType}_message`;

export type SuccessMessage = Message<"success">;
export type ErrorMessage = Message<"error">;

export type EventType<T extends string> = `${T}Changed`;
export type SpecificEvent = EventType<"user">;
