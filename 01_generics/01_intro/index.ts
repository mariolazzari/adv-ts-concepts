import { ElementHolder, KeyValuePair } from "./classes";
import { createResponse, printGeneric } from "./functions";
import { Pair } from "./interfaces";

// generic functions
let value = printGeneric<string>("ciao");
// type inference
value = printGeneric("Mario");

// generic classes
const pair = new KeyValuePair<string, string>("url", "mariolazzari.it");
pair.displayPair();

// generic interfaces
const config: Pair<string, string> = {
  key: "url",
  value: "mario",
};

const stringRes = createResponse<string>("My test", 200, "OK");
const numberRes = createResponse<number[]>([1, 2, 3], 200, "OK");
console.log(stringRes, numberRes);

const holder = new ElementHolder<string>(["uno", "due", "tre"]);
holder.printAll();

holder.add("zero");
holder.printAll();

holder.remove("zero");
holder.printAll();
