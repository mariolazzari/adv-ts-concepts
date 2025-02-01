let notSure: unknown = 50;
notSure = true;
notSure = "Mario";

if (typeof notSure === "string") {
  console.log(notSure.length);
}
