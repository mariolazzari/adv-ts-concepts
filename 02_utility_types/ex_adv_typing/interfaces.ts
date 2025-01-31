import { UserType } from "./types";

export interface GenericUser<T extends UserType> {
  id: number;
  username: string;
  permissions?: T extends "admin" ? string[] : never;
  expirationDate?: T extends "guest" ? Date : never;
  memberSince?: T extends "member" ? Date : never;
}
