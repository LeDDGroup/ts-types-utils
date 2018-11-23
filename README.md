# ts-types-utils

[![npm version](https://img.shields.io/npm/v/ts-types-utils.svg)](https://www.npmjs.com/package/ts-types-utils)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Type utilities for typescript

## Usage

Import types and use them ;-)

### ArgsType

`ArgsType<F> // F is function`

Like built-in `ReturnType` but for the args of a function, works for any number of arguments

```ts
import { ArgsType } from "ts-types-utils";
function myFunc(a: string, b: number) {}
const all: ArgsType<typeof myFunc>; // [string, number]
const first: ArgsType<typeof myFunc>[0]; // string
const second: ArgsType<typeof myFunc>[1]; // number
```

### Func

`Func<P, R> // P: params type, R: return type`

This doesn't really bring much but syntactic sugar

```ts
import { Func } from "ts-types-utils";

const myfunc: Func<[string, number], boolean>; // (a: string, b: number) => boolean
```

### Match

`Match<T, M, F> // T is object, M is what to match to, F negate`

Pick from T all properties that match M, or not match M if F is false

```ts
import { Match } from "ts-types-utils";

type FunctionProperties<T> = Match<T, Function>; // Match<T, Function, true>
type NonFunctionProperties<T> = Match<T, Function, false>;

type Foo = {
  a: string;
  b: number;
  c: () => void;
  d: (hello: string) => number;
};

const nonfuncs: NonFunctionProperties<Foo>; // { a: string, b: number }
const funcs: FunctionProperties<Foo>; // { c: () => void; d: (hello: string) => number }
```

### MatchNames

`MatchNames<T, M, F> // T is object, M is what to match to, F negate`

Get properties names from T that match M, or not match M if F is false

```ts
import { MatchNames } from "ts-types-utils";

type FunctionPropertiesNames<T> = Match<T, Function>; // MatchNames<T, Function, true>
type NonFunctionPropertiesNames<T> = Match<T, Function, false>;

type Foo = {
  a: string;
  b: number;
  c: () => void;
  d: (hello: string) => number;
};

const nonfuncs: NonFunctionPropertiesNames<Foo>; // "a" | "b"
const funcs: FunctionPropertiesNames<Foo>; // "c" | "d"
```

### Assign

`Assign<A, B>` like A & B but replaces intersected A types with the ones from B

```ts
import { Assign } from "ts-types-utils";

type A = {
  foo: string;
  bar: number;
};
type B = {
  foo: number;
  baz: boolean;
};

const bad: A & B = {
  foo: 1, // error type string | number doesn't match number
  bar: 2,
  baz: false
};
const good: Assign<A, B> = {
  foo: 1,
  bar: 2,
  baz: false
};
```

## Related

Tests were made with [typescript-test-utils](https://github.com/danielpa9708/typescript-test-utils "typescript-test-utils")
