export type Assign<T, K> = Pick<T, Exclude<keyof T, keyof K>> & K;
