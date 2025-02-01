function getData(id: number): string;
function getData(name: string): string;
function getData(name: string, age: number): string;
function getData(value: number | string, age?: number): string {
  if (typeof value === "number") {
    return `User ID: ${value}`;
  } else if (age !== undefined) {
    return `User Name: ${value}, Age: ${age}`;
  } else {
    return `User Name: ${value}`;
  }
}
console.log(getData(23, "Zia"));
