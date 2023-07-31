import { Todo } from "../../model/todo.mjs";

export const Query = {
  getTodos: async () => {
    const todos = await Todo.find();
    return todos;
  },
  getTodo: async (parent, { id }) => {
    const todo = Todo.findById(id);
    return todo;
  },
};
