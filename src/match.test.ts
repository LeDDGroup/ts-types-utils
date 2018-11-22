import { assertTrue, Equals, Extends } from "typescript-test-utils";
import { Match } from "./index";
import { MatchNames } from "./match";

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

it("MatchNames", () => {
  type FunctionPropertiesNames<T> = MatchNames<T, Function>;
  type NonFunctionPropertiesNames<T> = MatchNames<T, Function, false>;

  type TestObject = {
    a: string;
    b: () => void;
    c: {
      foo: string;
      bar: () => string;
    };
  };

  assertTrue<Equals<FunctionPropertiesNames<TestObject>, "b">>();
  assertTrue<Equals<NonFunctionPropertiesNames<TestObject>, "a" | "c">>();
});
