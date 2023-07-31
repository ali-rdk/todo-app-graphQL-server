import { Todo } from "../../model/todo.mjs";

export const Mutation = {
  addTodo: async (parent, { title, description }) => {
    const newTodo = await new Todo({
      title,
      description,
    });
    await newTodo.save();
    return newTodo;
  },
  deleteTodo: async (parent, { id }) => {
    return await Todo.findByIdAndDelete(id);
  },
};
