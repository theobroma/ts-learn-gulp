//  https://netbasal.com/getting-to-know-the-partial-type-in-typescript-ecfcfbc87cb6
type MyPartial<T> = { [P in keyof T]?: T[P] | undefined; };

interface Todo {
    title: string;
    description: string;
}

type MyPartialTodoType = MyPartial<Todo>;
type PartialTodoType = Partial<Todo>;

function updateTodo(todo: Todo, fieldsToUpdate:PartialTodoType) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});