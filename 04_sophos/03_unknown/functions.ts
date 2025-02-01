export async function fetchData(url: string): Promise<unknown> {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function handleData() {
  const data = await fetchData("https://mariolazzari.it");
  if (Array.isArray(data)) {
    console.log("Data is an array:", data);
  } else if (typeof data === "object" && data) {
    console.log("Data is an object");
  } else {
    console.log("Data unknown");
  }
}
