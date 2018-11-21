import { assertTrue, Equals } from "typescript-test-utils";
import { Match } from "./index";

it("Match", () => {
  type FunctionProperties<T> = Match<T, Function>;
  type NonFunctionProperties<T> = Match<T, Function, false>;

  type TestObject = {
    a: string;
    b: () => void;
    c: {
      foo: string;
      bar: () => string;
    };
  };

  assertTrue<
    Equals<
      NonFunctionProperties<TestObject>,
      { a: string; c: { foo: string; bar: () => string } }
    >
  >();

  assertTrue<Equals<FunctionProperties<TestObject>, { b: () => void }>>();
});
