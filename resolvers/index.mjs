import mongoose, { mongo } from "mongoose";
import { Todo } from "../model/todo.mjs";
import { Query } from "./query/index.mjs";
import { Mutation } from "./mutation/index.mjs";

export const resolvers = {
  Query,
  Mutation,
};
