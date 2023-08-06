import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TodoType } from "@/types";
import { gql, useMutation } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($title: String!, $description: String) {
    addTodo(title: $title, description: $description) {
      _id
    }
  }
`;

const TodoSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
});

export const Form = () => {
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(TodoSchema),
  });

  const submitHandler = (data: TodoType) => {
    console.log(data);
    addTodo({
      variables: { title: data.title, description: data.description },
    });
    reset({ title: "", description: "" });
  };
  return (
    <form
      className="flex flex-col justify-center w-3/4 max-w-sm space-y-3"
      onSubmit={handleSubmit(submitHandler)}
    >
      <input
        {...register("title")}
        type="text"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Title"
      />
      <p className="text-red-600">{errors.title?.message}</p>
      <input
        {...register("description")}
        type="text"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Description"
      />
      <button
        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
