import { EventConfig } from "./interfaces";
import { EventType } from "./types";

export function handleEvent<T extends string>(
  e: EventType<T>,
  handler: (e: EventConfig) => void
) {
  // error handler
}
