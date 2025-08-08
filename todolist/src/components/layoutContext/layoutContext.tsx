"use client";

import { TodoItems, TodoList } from "@/context/AppContext";
import { useState } from "react";
import { Toaster } from "sonner";
import Home from "../Home";
interface ILayoutProps {
  children: React.ReactNode;
}

const LayoutContext = ({ children }: ILayoutProps) => {

    const [todos, setTodos]= useState<TodoItems[]>([])
  return (
    <div className="flex flex-col h-screen">
      <TodoList.Provider value={{todos,setTodos}}>
        <Toaster position="top-right" richColors />
        <Home/>
        {children}
      </TodoList.Provider>
    </div>
  );
};

export default LayoutContext;
