import { Todo } from "../../model/todo.mjs";

export const Query = {
  getTodos: async () => {
    const todos = await Todo.find();
    return todos;
  },
  getTodo: async (parent, { id }) => {
    console.log(id);
    const todo = Todo.findById(id);
    console.log(todo);
    return todo;
  },
};
