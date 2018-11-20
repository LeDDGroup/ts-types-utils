type MatchNames<T, L> = { [K in keyof T]: T[K] extends L ? K : never }[keyof T];

type NotMatchNames<T, L> = {
  [K in keyof T]: T[K] extends L ? never : K
}[keyof T];

export type Match<T, L, M = true> = Pick<
  T,
  M extends true ? MatchNames<T, L> : NotMatchNames<T, L>
>;
