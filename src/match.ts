type DoMatchNames<T, L> = {
  [K in keyof T]: T[K] extends L ? K : never
}[keyof T];

type NotMatchNames<T, L> = {
  [K in keyof T]: T[K] extends L ? never : K
}[keyof T];

export type MatchNames<T, L, M extends boolean = true> = M extends true
  ? DoMatchNames<T, L>
  : NotMatchNames<T, L>;

export type Match<T, L, M extends boolean = true> = Pick<
  T,
  MatchNames<T, L, M>
>;
