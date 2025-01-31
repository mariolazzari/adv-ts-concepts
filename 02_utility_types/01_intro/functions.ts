import { OptionalProps, Task } from "./interfaces";

// Partial<T>
export function updateTask(task: Task, fieldsToUpdate: Partial<Task>): Task {
  return { ...task, ...fieldsToUpdate };
}

// Required<T>
export function configureSettings(
  settings: Required<OptionalProps>
): Required<OptionalProps> {
  return settings;
}
