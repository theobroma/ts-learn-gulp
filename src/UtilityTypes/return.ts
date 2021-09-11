// https://dev.to/busypeoples/notes-on-typescript-returntype-3m5a
function getInt(a: string) {
  return parseInt(a);
}

type FT = ReturnType<typeof getInt>; // => number

// ===================================----=======================================
type A = ReturnType<any>; // => any
type B = ReturnType<never>; // => never
type C = ReturnType<() => string>; //=> string