import { log } from "./functions";

log("User logged.");
log(new Error("File not found"));
log("Missing file", new Error("File not found"));
