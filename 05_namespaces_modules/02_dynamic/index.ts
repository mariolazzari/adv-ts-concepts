async function loadmathUtils() {
  const { add } = await import("./math");
  console.log(add(1, 2));
}

loadmathUtils();
