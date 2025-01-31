import { handleEvent } from "./fincitons";

handleEvent("userChanged", config => {
  console.log("User changed:", config.detail);
});
