
"use client";

import AddTodo from "@/components/AddTodo";
import { useContext, useEffect, useState } from "react";
import { GetAllTodos } from "@/services/services";
import { TodoItems, TodoList } from "@/context/AppContext";
import styled from "@/Styles/home.module.css";
import TodoItem from "./todoItem";

const Home = () => {
  const { todos, setTodos } = useContext(TodoList);
  const [filter, setFilter] = useState<"all" | "todo" | "completed">("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Todos = await GetAllTodos();
        setTodos(Todos.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleAllBtnClick = () => {
    // نمایش همه‌ی موارد
    setFilter("all");
  };

  const handleTodoBtnClick = () => {
    // فیلتر برای فقط موارد انجام‌نشده
    setFilter("todo");
  };

  const handleComplitedBtnClick = () => {
    // فیلتر برای فقط موارد انجام‌شده
    setFilter("completed");
  };

  // const handleAddBtnClick = () => {
  //   <AddTodo />;
  // };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className={styled.window}>
          <div className={` text-gray-300 ${styled.title} `}>To-Do ( Next.js )</div>

          <div className={styled.upWindow}>
            <AddTodo />
            <button
              className={styled.upWindowbtn}
              style={{
                backgroundColor: filter === "all" ? "#2196F3" : "white",
                color: filter === "all" ? "white" : "black",
              }}
              onClick={handleAllBtnClick}
            >
              All
            </button>
            <button className={styled.upWindowbtn} onClick={handleTodoBtnClick} style={{
                backgroundColor: filter === "todo" ? "#2196F3" : "white",
                color: filter === "todo" ? "white" : "black",
              }}>
              Todo
            </button>
            <button
              className={styled.upWindowbtn}
              onClick={handleComplitedBtnClick}
              style={{
                backgroundColor: filter === "completed" ? "#2196F3" : "white",
                color: filter === "completed" ? "white" : "black",
              }}
            >
              Completed
            </button>
          </div>

          <div className={styled.main}>
            <div className={styled.navbar}>
              <p>Task</p>
              <p style={{ textAlign: "left", marginLeft: "-10px" }}>
                Description
              </p>
              <p>Category</p>
              <p>When</p>
              <p>isComplete?</p>
            </div>
            {todos && todos.length > 0 ? (
              todos.map((item: TodoItems) => {
                if (
                  filter === "all" ||
                  (filter === "todo" && !item.done) ||
                  (filter === "completed" && item.done)
                ) {
                  return (
                    <TodoItem
                      key={item.id}
                      id={item.id}
                      task={item.task}
                      description={item.description}
                      category={item.category}
                      when={item.when}
                      done={item.done}
                    />
                  );
                }
                return null;
              })
            ) : (
              <p style={{ textAlign: "center" , color:"#2196F3" , paddingTop:"100px"}}>No tasks to display</p>
            )}

            {/* 
            {todos &&
              todos.length > 0 &&
              todos.map((item: TodoItems) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  task={item.task}
                  description={item.description}
                  category={item.category}
                  when={item.when}
                  done={item.done}
                />
              ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
