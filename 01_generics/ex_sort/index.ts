function sortArray<T, K extends keyof T>(items: T[], key: K) {
  return items.sort((a, b) => (a[key] < b[key] ? -1 : 1));
}

const tasks = [
  { id: 111, title: "Go at the beach" },
  { id: 200, title: "Complete task" },
  { id: 2, title: "Sleeping" },
];

let sorted = sortArray(tasks, "id");
console.log(sorted);
sorted = sortArray(tasks, "title");
console.log(sorted);
