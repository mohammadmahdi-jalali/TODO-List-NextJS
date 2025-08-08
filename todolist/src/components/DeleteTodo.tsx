"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteTodoById } from "@/services/services";
import { TodoList } from "@/context/AppContext";
import { useContext } from "react";
import { toast } from "sonner";

const DeleteTodo = ({ id }: { id: string }) => {
  const { todos, setTodos } = useContext(TodoList);
  const handleDeleteTodoItem = async (id: string) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) {
        toast.error("Item Not Found 😢");
        return;
      }
      const response = await DeleteTodoById(id);
      if (response.status === 200) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        toast.success("Todo deleted successfully!");
        console.log(response);
      }else{
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faTrash}
      className="text-red-500 cursor-pointer mt-2 pr-2"
      id={id}
      onClick={() => handleDeleteTodoItem(id)}
    />
  );
};

export default DeleteTodo;
