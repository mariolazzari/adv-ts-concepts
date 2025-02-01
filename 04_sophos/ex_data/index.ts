function processData(data: unknown): void {
  switch (true) {
    case typeof data === "string":
      console.log("String data:", data);
      break;
    case typeof data === "number":
      console.log("Number data:", data);
      break;
    case Array.isArray(data):
      console.log("Array data with length " + data.length + ":", data);
      break;
    case typeof data === "object" && data !== null:
      console.log("Object data:", data);
      break;
    case data === null:
      console.log("Null data");
      break;
    default:
      console.log("Unhandled type of data:", data);
  }
}

// Example usage
processData("Hello, TypeScript!");
processData(12345);
processData([1, 2, 3, 4, 5]);
processData({ name: "Alice", age: 30 });
processData(null);
processData(undefined);
