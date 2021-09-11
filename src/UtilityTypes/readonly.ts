// type MyPartial<T> = { [P in keyof T]?: T[P] | undefined; };
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

interface Todo2 {
  title: string;
}

const todo: Readonly<Todo2> = {
  title: "Delete inactive users",
};

const mytodo: MyReadonly<Todo2> = {
  title: "Delete inactive users",
};

// Uncomment to see error
// todo.title = "Hello";
// mytodo.title = "Hello";
