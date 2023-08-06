import { Form } from "@/components";
import { List } from "@/components/todoslist";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function Home() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main className="flex flex-col justify-center items-center mt-12 mx-auto">
        <Form></Form>
        <List />
      </main>
    </ApolloProvider>
  );
}
