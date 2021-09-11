type T0 = Exclude<"a" | "b" | "c", "a">;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), Function>;

// Custom

type MyExclude<T, U> = T extends U ? never : T;

type T3 = MyExclude<"a" | "b" | "c", "a">;

type T4 = MyExclude<"a" | "b" | "c", "a" | "b">;

type T5 = MyExclude<string | number | (() => void), Function>;
