import { checkInput, getArea } from "./functions";
import { Circle, Square } from "./interfaces";

checkInput("Mario");
checkInput(50);

const circle: Circle = {
  kind: "Circle",
  radius: 10,
};
console.log(`${circle.kind} area: ${getArea(circle).toFixed(2)}`);

const square: Square = {
  kind: "Square",
  side: 10,
};
console.log(`${square.kind} area: ${getArea(square).toFixed(2)}`);
