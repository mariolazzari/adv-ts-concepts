import { fetchUser, processInput } from "./funcions";

processInput("text", ["Mario", "Lazzari"]);
processInput("number", [1, 2]);

const successRes = fetchUser("success");
console.log(successRes);

const errorRes = fetchUser("error");
console.log(errorRes);
