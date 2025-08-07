"use client"
import Home from "@/components/Home";
import LayoutContext from "@/components/layoutContext/layoutContext";

// const Todo = async () => {
//   const { data } = await axios.get("http://localhost:8000/todoList");

interface ILayoutProps {
  children: React.ReactNode;
}


  const Todo =  ({ children }: ILayoutProps) => {


  return (
    <LayoutContext>
      <Home/>
      {children}
      </LayoutContext>
    
  )
};

export default Todo;

