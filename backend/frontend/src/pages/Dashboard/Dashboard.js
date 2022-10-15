import "../Dashboard/Dashboard.scss"
import {useEffect,} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector,} from "react-redux"
import { toast } from "react-toastify"
import Todo from "../../components/Todo/Todo"


function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)
 
 
 useEffect(()=>{
   if(!user){
    navigate("/Showpage") 
  }
 },[])
 
  return (
    <>
    <h3> Hello!  {user ? user.username : ""}</h3>
    <Todo />
    </>
  )
}

export default Dashboard