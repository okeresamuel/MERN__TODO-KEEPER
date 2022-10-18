import {useState, useEffect} from "react"
import "../Todo/Todo.scss"
import {useDispatch, useSelector} from "react-redux"
import { toast } from "react-toastify"
import {postTodo, getTodo, deleteTodo,} from "../../features/Todo/todoAction"
import Loader from "../Loader/Loader"
import Trashcan from "../../assets/images/trashCan.png"
import moment from "moment"


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
  <div className="Todo__container">
  <h1>Enter your todo </h1>
 
  <form>
  <div>
  <input  className="todo__input" placeholder="Enter Stuffs to dolo" name="text" onChange={(e)=>{setTodo(e.target.value)}} required></input>
  </div>
  <button onClick={sendTodo} className="addTodo__btn">Add to list</button>
  </form>

   
   <form>
   <section>
   {todo.length >= 0 ? (
    <div>
      {todo.map( todo => (
            <div className="todo" key={todo._id}>
            <div className="todoInner__container">
            <span> 
             {todo.text} 
             <p>{`Created ${moment(todo.createdAt).fromNow()}`}</p>
             </span>
            <div>
             
       
            <button><img className="trashCan__img" src={Trashcan} alt="trashcan__img" onClick={(()=>{dispatch(deleteTodo(todo._id))})}/></button>
            </div>
          </div>
         </div>
      ))}
    </div>
   ): (<h3>You do not have any todo </h3>)}
 </section>
 </form>
{loading ? <Loader /> : ""}
</div> 
)

}

export default Todo




 