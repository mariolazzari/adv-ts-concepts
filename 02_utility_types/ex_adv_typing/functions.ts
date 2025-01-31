import { GenericUser } from "./interfaces";
import { UserType } from "./types";

export function updateUser<T extends UserType>(user: GenericUser<T>) {
  console.log(`Updating user ${user.username}`);

  if (user.permissions && "permissions" in user) {
    console.log("Permissions:", user.permissions.join(", "));
  }
  if (user.expirationDate && "expirationDate" in user) {
    console.log("Expires:", user.expirationDate.toISOString());
  }
  if (user.memberSince && "memberSince" in user) {
    console.log("Member Since:", user.memberSince.toISOString());
  }
  // Simulate updating user in the database
}
