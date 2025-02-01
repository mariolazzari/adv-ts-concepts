import { Shape } from "./types";

export function isString(value: any): boolean {
  return typeof value === "string";
}

export function checkInput(input: string | number) {
  if (isString(input)) {
    console.log("It's a string:", (input as string).toLocaleUpperCase());
  } else {
    console.log("It's a number:", (input as number).toFixed(2));
  }
}

export function getArea(shape: Shape) {
  switch (shape.kind) {
    case "Circle":
      return shape.radius * shape.radius * Math.PI;

    case "Square":
      return shape.side ** 2;

    default:
      return -1;
  }
}
