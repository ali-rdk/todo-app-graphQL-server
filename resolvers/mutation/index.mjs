import { Todo } from "../../model/todo.mjs";

export const Mutation = {
  addTodo: async (parent, { title, description }) => {
    try {
      const newTodo = await new Todo({
        title,
        description,
      });
      await newTodo.save();
      return newTodo;
    } catch (error) {
      console.log(error);
    }
  },
};
