type T11 = Extract<"a" | "b" | "c", "a" | "f">;

type T12 = Extract<string | number | (() => void), Function>;

// Custom

// type MyExclude<T, U> = T extends U ? never : T;
type MyExtract<T, U> = T extends U ? T : never;

type T13 = MyExtract<"a" | "b" | "c", "a" | "f">;

type T14 = MyExtract<string | number | (() => void), Function>;
