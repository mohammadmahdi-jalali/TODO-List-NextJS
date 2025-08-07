
import DeleteTodo from "./DeleteTodo";
import DoneTodo from "./DoneTodo";
import styled from "@/Styles/todoItem.module.css"
import { TodoItems } from "@/context/AppContext";


const TodoItem=({id ,task,description,category,when,done} : TodoItems)=>{

//   const handleDelete =(item)=>{
//     console.log(item.target.id)
//     item.isComplete?(console.log("deleted from is complete")):(console.log("deleted from toDo"))
    
    
//   }
//   const handleEdit=()=>{
//     console.log("edited")
//   }


    return(
            <div className={styled.todoItem} style={{ opacity: "100%" }}>
              <p>{task}</p>
              <p>{description}</p>
              <p>{category}</p>
              <p>{when}</p>
              <span className={styled.editBtn}>
                <DoneTodo   id={id} done={done}/>
              </span>
              <span className={styled.delteBtn}>
                <DeleteTodo id={id}/>
              </span>
            </div>
    )
}

export default TodoItem
