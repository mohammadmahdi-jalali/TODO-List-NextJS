import axios from "axios";

const BaseUrl = "http://localhost:8000/todoList";

export const GetAllTodos = async () => {
  return axios.get(BaseUrl);
};

export const DeleteTodoById = async (id: string) => {
  return axios.delete(`${BaseUrl}/${id}`);
};

export const DoneTodoById = async (id: string, done:boolean) => {
  return axios.patch(`${BaseUrl}/${id}`, { done: !done });
};

export const AddTodos = async (task:string , description:string , category:string , when:string)=>{
    return axios.post(BaseUrl, {
        task :task,
        description :description,
        category :category,
        when :when,
        done: false,
        isdeleted: false,
      });
}