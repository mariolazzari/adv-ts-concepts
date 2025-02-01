function greet(name: string): string;
function greet(age: number): string;
function greet(value: string | number): string {
  if (typeof value === "string") {
    return `Hello ${value}`;
  }
  return `You are ${value} old`;
}

export function formatDate(data: Date): string;
export function formatDate(str: string): string;
export function formatDate(input: Date | string): string {
  if (input instanceof Date) {
    return input.toDateString();
  }

  const date = new Date(input);
  return date.toDateString();
}
