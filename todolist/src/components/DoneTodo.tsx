"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { DoneTodoById } from "@/services/services";
import { toast } from "sonner";
import { TodoList } from "@/context/AppContext";
import { useContext } from "react";

const DoneTodo = ({ done, id }: { done: boolean; id: string }) => {
  const { todos, setTodos } = useContext(TodoList);
  const handleDoneTodoItem = async (id: string) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) {
        toast.error("Item Not Found 😢");
        return;
      }
      const response = await DoneTodoById(id, done);
      if (response.status === 200) {
        setTodos((prevTodos) =>
          prevTodos.map((itodo) =>
            itodo.id === id ? { ...itodo, done: !itodo.done } : itodo
          )
        );
        toast.success("Success");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FontAwesomeIcon
        icon={done ? faCircleCheck : faCircle}
        className={`cursor-pointer mt-2 pr-2 ${
          done
            ? "text-green-500 hover:text-green-700"
            : "text-green-200 hover:text-green-300"
        }`}
        id={id}
        onClick={() => handleDoneTodoItem(id)}
      />
    </>
  );
};

export default DoneTodo;
