export type PromiseOr<T> = Promise<T> | T;

export type Action<T = void> = () => T;
