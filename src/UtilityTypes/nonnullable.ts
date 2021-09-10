type T21 = NonNullable<string | number | undefined>;

type T22 = NonNullable<string[] | null | undefined>

// Custom

type MyNonNullable<T> = T extends null | undefined ? never : T;


type T23 = MyNonNullable<string | number | undefined>;

type T24 = MyNonNullable<string[] | null | undefined>