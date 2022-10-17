
import {useDispatch} from "react-redux"
import Trashcan from "../../../assets/images/trashCan.png"
import updateIcon from "../../../assets/images/settings.png"
import { deleteTodo, updateTodo} from "../../../features/Todo/todoAction"
import {reset} from "../../../features/Todo/todoSlice"

function Onetodo({todo, moment}) {
const  dispatch = useDispatch()


  return (
    <div className="todo" key={todo._id}>
        <div className="todoInner__container">
        <p>
        <h2>{todo.text}</h2>
        {`Created ${moment(todo.createdAt).fromNow()}`}</p>
        </div>
      <button><img className="trashCan__img" src={Trashcan} alt="trashcan__img" onClick={(()=>{dispatch(deleteTodo(todo._id), dispatch(reset()))})}/></button>
    </div>
  )
}
export default Onetodo