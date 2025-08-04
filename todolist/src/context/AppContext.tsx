import { createContext, SetStateAction } from "react";


export interface TodoItems {
  id: string;
  task: string;
  description: string;
  category: string;
  when: string;
  done: boolean;
  
}
export type TodoItemContext={
    todos: TodoItems[],
    setTodos: React.Dispatch<SetStateAction<TodoItems[]>>
    
}
export const TodoList = createContext({}as TodoItemContext)
