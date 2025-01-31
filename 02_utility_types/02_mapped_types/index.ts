import { Person } from "./intrfaces";
import {
  NullablePerson,
  OptionalPerson,
  ReadonlyPerson,
  StringPerson,
  StringProps,
} from "./types";

// mapped type
const opt: OptionalPerson = {
  name: "Mario",
};
console.log("Optional user:", opt);

const ro: ReadonlyPerson = {
  name: "Mario",
  age: 50,
};
// ro.age = 49; -> error
console.log("Readonly user:", ro);

const str: StringPerson = {
  name: "Mario",
  age: "50",
};
console.log("String person:", str);

const nil: NullablePerson = {
  name: "Mario",
  age: null,
};
console.log("Nullable person:", nil);

type PersonStringProps = StringProps<Person>;
const strPerson: PersonStringProps = {
  name: "Mario",
};
console.log("String person:", strPerson);
