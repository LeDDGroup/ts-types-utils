export type UndefinedToOptional<T> = Pick<
  T,
  { [id in keyof T]: undefined extends T[id] ? never : id }[keyof T]
> &
  {
    [id in {
      [id in keyof T]: undefined extends T[id] ? id : never
    }[keyof T]]?: Exclude<T[id], undefined>
  };
