import {useSelector,} from "react-redux"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import TaskImg from "../../assets/images/TaskIcon.png"
import ManImg from "../../assets/images/man.webp"
import "../Showpage/Showpage.scss"

function Showpage() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)
 
  useEffect(()=>{
  if(!user){
    navigate("/Showpage")
  }
  }, [])


  return (
    <div className="Showpage">
       <img className="Task__img" src={TaskImg} alt="bulb img"/>
       <img className="man__img" src={ManImg} alt="bulb img"/>
      <div className="welcome__text">
      <h2>Hello ! Welcome on Board</h2>
      <p>Create a Task edit a task and delete a task</p>
  
      </div>
    </div>
  )
}

export default Showpage