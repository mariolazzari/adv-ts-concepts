import { updateUser } from "./functions";
import { GenericUser } from "./interfaces";

// Usage of the function with conditional types
const admin: GenericUser<"admin"> = {
  id: 1,
  username: "adminUser",
  permissions: ["manage_system", "modify_users"],
};

const guest: GenericUser<"guest"> = {
  id: 2,
  username: "guestUser",
  expirationDate: new Date(),
};

const member: GenericUser<"member"> = {
  id: 3,
  username: "memberUser",
  memberSince: new Date(),
};

updateUser(admin);
updateUser(guest);
updateUser(member);
