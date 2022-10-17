import {useState, useEffect} from "react"
import "../Todo/Todo.scss"
import {useDispatch, useSelector} from "react-redux"
import { toast } from "react-toastify"
import {reset} from "../../features/Todo/todoSlice"
import {postTodo, getTodo, deleteTodo, updateTodo} from "../../features/Todo/todoAction"
import Loader from "../Loader/Loader"
import moment from "moment"
import Onetodo from "./Onetodo/Onetodo"

function Todo() {
 const [availableTodo, setTodo] = useState("")
 const  dispatch = useDispatch()
 const {loading,error, todo} = useSelector((state)=> state.todo)

 useEffect(()=>{
if(error){
 toast.error("something went wrong please try again") 
}
dispatch(getTodo())
}, [])


//send todo to backend 
async function sendTodo(){
if(!availableTodo){
 toast.error("missing fields")
}else{
const todos = {
    text:availableTodo
 }
dispatch(postTodo(todos))
toast.success("item added")
}
}


 return (
  <>
  <h1>Enter your todo </h1>
 
 
  <div>
  <input  className="todo__input" placeholder="Enter Stuffs to dolo" name="text" onChange={(e)=>{setTodo(e.target.value)}} required></input>
  </div>
  <button onClick={sendTodo} className="addTodo__btn">Add to list</button>


   
  
   <section>
   {todo.length > 0 ? (
    <div>
      {todo.map((todo)=>(
        <Onetodo key={todo._id} todo={todo} moment={moment}/>
      ))}
    </div>
   ) : (<h3>You do not have togo</h3>)}
 </section>
{loading ? <Loader /> : ""}
</> 
)

}

export default Todo



// {todo.length <= 0 ? <h3>You have no available task todo</h3> : todo.map((todo)=>{
//   return (
   
//    <div className="todo" key={todo._id}>
//    <div className="todoInner__container">
//    <span> 
//     {todo.text} 
 
//     </span>
//    <div>
    


//    </div>
//  </div>
// </div>
// )
// })}
 