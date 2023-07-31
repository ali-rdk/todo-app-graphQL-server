import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./model/schema.mjs";
import { resolvers } from "./resolvers/index.mjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import appRootPath from "app-root-path";

dotenv.config({
  path: appRootPath.resolve("/env/.env"),
});

mongoose
  .connect(process.env.DB_URL, { dbName: "todoDB" })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
