interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview3 = Omit<Todo3, "description">;

const todo3: TodoPreview3 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
  // Uncomment to see error
  // description:"12313"
};

type TodoInfo3 = Omit<Todo3, "completed" | "createdAt">;

const todoInfo3: TodoInfo3 = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
  // Uncomment to see error
  // completed: false,
  // createdAt: 999,
};

// TODO implement MyOmit
