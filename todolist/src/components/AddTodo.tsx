"use client";

import { useContext, useState } from "react";
import styles from "@/Styles/styles.module.css";
import { TodoList } from "@/context/AppContext";
import { AddTodos } from "@/services/services";
import { toast } from "sonner";

const AddTodo = () => {
  //   const handleClick = () => {
  //     console.log("fire!");
  //   };

  const { setTodos } = useContext(TodoList);

  const [isOpen, setIsOpen] = useState(false);
  

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [when, setWhen] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleAddTodo = async () => {
    if (task.trim() !== "" && description.trim() !== "" && category.trim() !== "" && when.trim() !== "") {
      try {
        const response = await AddTodos(task,description,category,when);
        if (response.status >= 200 && response.status < 300) {
          // const Todos = await GetAllTodos();
          // setTodos(Todos.data);
          setTodos((prevTodos) => [...prevTodos, response.data]);
          setIsOpen(!isOpen);
          toast.success("Success");
          console.log("ADD RESPONSE:", response);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(`Something went wrong: ${error.message}`);
        } else {
          toast.error("Something went wrong");
        }
      }
    }
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className={styles.addButton}
      >
        Add a New Todo
      </button>
      {isOpen && (
        <div
          className={`fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 ${styles.myCustomBox}`}
          onClick={togglePopup}
        >
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-all duration-1000 w-5/12 ${styles.backgroundWindow}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Task:</h2>
            <p></p>
            <div>
              <input
                type="text"
                onChange={(e) => setTask(e.currentTarget.value)}
                className="bg-gray-200 w-full h-10 block mb-2 border-0 rounded-xl focus:outline-none p-2 font-thin text-sm shadow-inner"
              />
            </div>
            <h2 className="text-xl font-semibold mb-4">Description :</h2>
            <p></p>
            <div>
              <input
                type="text"
                onChange={(e) => setDescription(e.currentTarget.value)}
                className="bg-gray-200 w-full h-10 block mb-2 border-0 rounded-xl focus:outline-none p-2 font-thin text-sm shadow-inner"
              />
            </div>
            <h2 className="text-xl font-semibold mb-4">Category:</h2>
            <p></p>
            <div>
              <input
                type="text"
                onChange={(e) => setCategory(e.currentTarget.value)}
                className="bg-gray-200 w-full h-10 block mb-2 border-0 rounded-xl focus:outline-none p-2 font-thin text-sm shadow-inner"
              />
            </div>
            <h2 className="text-xl font-semibold mb-4">When:</h2>
            <p></p>
            <div>
              <input
                type="text"
                onChange={(e) => setWhen(e.currentTarget.value)}
                className="bg-gray-200 w-full h-10 block mb-2 border-0 rounded-xl focus:outline-none p-2 font-thin text-sm shadow-inner"
              />
            </div>
            <div className="flex justify-between w-full">
              <button
                onClick={togglePopup}
                className="mt-2 px-4 py-2 bg-red-700 text-white rounded-xl hover:bg-red-800 transition shadow-sm shadow-neutral-400"
              >
                x
              </button>
              <button
                onClick={handleAddTodo}
                className="mt-2 px-4 ml-1 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition flex-row flex-1/5 shadow-sm shadow-neutral-400"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTodo;
