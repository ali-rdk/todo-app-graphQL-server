import { TodoType } from "@/types";
import { useQuery, gql } from "@apollo/client";
import { title } from "process";
import ClipLoader from "react-spinners/ClipLoader";

const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      _id
      title
      description
    }
  }
`;

export const List = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading)
    return (
      <div>
        <ClipLoader className="#3b82f6" />
      </div>
    );

  console.log(data.getTodos);
  return (
    <div className="container flex flex-col items-center justify-center w-full mx-auto">
      <ul className="flex flex-col">
        {data.getTodos.map((todo: TodoType) => {
          <li className="flex flex-row mb-2 border-gray-400" id={todo._id}>
            <div className="shadow border select-none cursor-pointer bg-white 0 rounded-md flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium">{todo.title}</div>
                {!todo.description ? (
                  <div className="text-sm text-gray-600">todo.description</div>
                ) : (
                  <div className="text-sm text-gray-600">No Description</div>
                )}
              </div>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};
