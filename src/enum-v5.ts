// https://javascript.plainenglish.io/5-very-useful-tricks-for-typescript-enum-types-9662eb716520
enum Color { // Numeric enum
  Red,
  Green,
  Blue,
}

const enum HttpMethod { // String enum
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}
// ====================================================
const BaseValue = 200;
const Prefix = '/api';

enum HttpStatusCode {
  Ok = BaseValue, // 200
  Created, // 201
  Accepted, // 202
}

const enum Routes {
  Users = `${Prefix}/users`, // "/api/users"
  Posts = `${Prefix}/posts`, // "/api/posts"
}
// ====================================================
// 2. Enum members as types
enum E {
  A = 10 * 10, // Numeric literal enum member
  B = 'bytefer', // String literal enum member
  C = Math.random(), // Opaque computed enum member
}
// ====================================================

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 20,
};
// ====================================================
// 3. Use enum members to represent different boolean flags
enum Permission {
  Read = 1 << 0, // 1
  Write = 1 << 1, // 2
  Create = 1 << 2, // 4
  Delete = 1 << 3, // 8
  All = 1 << 4, // 16
}

let p0: Permission = Permission.Read; // Ok
let p1: Permission = 1; // Ok
// let p2: Permission = 3; // Ok in TS<v5
let p3: Permission = Permission.Read | Permission.Write; // 3

function canRead(p: Permission) {
  return (p & Permission.Read) === Permission.Read;
}

function canWrite(p: Permission) {
  return (p & Permission.Write) === Permission.Write;
}

// p3 = Permission.Read | Permission.Write;
console.log(canRead(p3)); // true
console.log(canWrite(p3)); // true

// ====================================================
// 4. Get the type of the enum key and value

// enum HttpMethod {
//   Get = 'GET',
//   Post = 'POST',
//   Put = 'PUT',
//   Delete = 'DELETE',
// }

type HttpKeys = keyof typeof HttpMethod;
// "Get" | "Post" | "Put" | "Delete"

type HttpValues = `${HttpMethod}`;
// "GET" | "POST" | "PUT" | "DELETE"

// ====================================================
// 5. Use const enums to reduce extra code
var methods = [HttpMethod.Get, HttpMethod.Post];
