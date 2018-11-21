import { assertTrue, Equals } from "typescript-test-utils";
import { Assign } from "./index";

it("Assign", () => {
  type A = {
    foo: string;
    bar: number;
  };
  type B = {
    foo: number;
    baz: boolean;
  };

  type Joined = Assign<A, B>;

  assertTrue<Equals<Joined, { foo: number; bar: number; baz: boolean }>>();
});
