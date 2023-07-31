import mongoose, { Schema, model } from "mongoose";

const TodoSchema = Schema({
  id: mongoose.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: String,
});

export const Todo = model("Todo", TodoSchema);
