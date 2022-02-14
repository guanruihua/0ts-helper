// 去掉数组的最后一位
export type Pop<T extends unknown[]> = T extends [...infer LeftRest, infer Last]
  ? LeftRest
  : never

/**
 * 在元组最后插入一位
 * @example
 * type Result = Push<[1, 2, 3], 4> // [1, 2, 3， 4]
 */
export type Push<T extends unknown[], Item> = [...T, Item]
