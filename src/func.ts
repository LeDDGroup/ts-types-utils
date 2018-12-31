export type Func<P extends any[], R> = (...args: P) => R;

export type ArgsType<F extends Func<any, any>> = Parameters<F>;
