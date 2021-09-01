type MyRequired<T> = { [P in keyof T]-?: T[P]; }

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
const obj3: MyRequired<Props> = { a: 5 };