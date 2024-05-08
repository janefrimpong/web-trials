import { useState } from "react"

const Todol =()=>{
  const[todo, setTodo]= useState("")

  const[todolist,settodolist]=useState([]);
  console.log(todo)
  const handleForm=(e)=>{
    e.prevenDefault()
    setTodo([...todolist,{todoName:todo}])
    setTodo("")
  }



  return (
    <div className="bg-gray-200 w-full h-screen  flex items-center">
      <div className="w-[500px] mx-auto bg-white p-5 text-center">

      
      <h1 className="text-5xl font-bold mb-8">Todo List</h1>
      <form onSubmit={handleForm}>
        <input  className=" border-2 border-black rounded-full 
         w-full p-2  mb-5" type="text" placeholder="Type Todo"
         value={todo} 
         onChange={(e)=>setTodo(e.target.value)}
         />

        <button className=" bg-green-600 text py-3  px-4 rounded-full mb-5" type="submit">Add Todo</button>
      </form>
      <div className="todo-show-area">
        <ul>
         {todolist.map((singleTodo)=>{
           <li className="bg-black text-white py-3 px-4 rounded-full
           text-2xl flex justify-between">{singleTodo.todoName}{""}
           <span className=" text-green-600 text-2xl cursor-pointer"> x </span>
           
           </li>
         })}
        </ul>
        </div>

      </div>
      
    </div>
  )
}
export default Todol