import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getTodos: [Todo]!
    getTodo(id: ID!): Todo
  }

  type Todo {
    _id: ID
    title: String!
    description: String
  }

  type Mutation {
    addTodo(title: String!, description: String): Todo
  }
`;
