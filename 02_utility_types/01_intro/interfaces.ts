export interface Task {
  title: string;
  description: string;
  completed: boolean;
}

export interface OptionalProps {
  name?: string;
  age?: number;
}

export interface User {
  readonly id: number;
  name: string;
}
