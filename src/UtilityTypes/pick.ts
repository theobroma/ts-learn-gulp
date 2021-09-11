// https://www.youtube.com/watch?v=m1GER-R0uLE
// type MyPartial<T> = { [P in keyof T]?: T[P] | undefined; };
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

export type Point3D = {
  x: number;
  y: number;
  z: number;
};

export type Point2D = Pick<Point3D, "x" | "y">;
export type MyPoint2D = MyPick<Point3D, "x" | "y">;
