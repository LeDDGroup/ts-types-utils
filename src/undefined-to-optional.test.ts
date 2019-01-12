import { assertTrue, Extends } from "typescript-test-utils";
import { UndefinedToOptional } from "./index";

it("UndefinedToOptional", () => {
  type Input = {
    a: string | undefined;
    b?: number;
    c: string;
  };
  type Output = UndefinedToOptional<Input>;
  assertTrue<Extends<Output, { a?: string; b?: number; c: string }>>();
});
