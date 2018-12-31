import { assertTrue, Extends } from "typescript-test-utils";
import { PromiseOr, Action } from "./index";

it("PromiseOr", () => {
  assertTrue<
    Extends<
      PromiseOr<{ foo: string }>,
      { foo: string } | Promise<{ foo: string }>
    >
  >();
});

it("Action", () => {
  assertTrue<Extends<Action<{ foo: string }>, (() => { foo: string })>>();
  assertTrue<Extends<Action, (() => void)>>();
});
