import { assertTrue, Equals } from "typescript-test-utils";
import { Match, ArgsType } from "./index";

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

it("ArgsType", () => {
  type TestFunction = (a: string, b: number, c: null) => void;

  assertTrue<Equals<ArgsType<TestFunction>[0], string>>();
  assertTrue<Equals<ArgsType<TestFunction>[1], number>>();
  assertTrue<Equals<ArgsType<TestFunction>[2], null>>();
});
