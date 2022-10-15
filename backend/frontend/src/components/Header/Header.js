import { Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../features/Auth/userActions"
import { reset } from "../../features/Auth/Authslice"
import "../Header/Header.scss"

function Header() {
const dispatch = useDispatch()
const navigate = useNavigate()
const {user} = useSelector((state)=> state.auth) 


//logout from your account
function logoff(){
 dispatch(logout())
 navigate("/Showpage")
 dispatch(reset())
}


  function animatemenu(){
  const lineOne = document.querySelector(".line__one")
  const lineTwo = document.querySelector(".line__two")
  const lineThree = document.querySelector(".line__three")
  const menuIcon = document.querySelector(".Menu__iconContainer")
  lineOne.classList.toggle("move__left")
  lineTwo.classList.toggle("rotate__one")
  lineThree.classList.toggle("rotate__two")
  menuIcon.style.transition = "1s"
}


  return (
   <div className="Header">
   <h1>Todo Keeper</h1>

   <div className="Menu__iconContainer" onClick={animatemenu}>
     <div className="Menu__icons">
      <span className="line__one"></span>
      <span className="line__two"></span>
      <span className="line__three"></span>
    </div>
  </div>

   <div className="Nav__secondDiv">
   <div className="Nav__links">
   <Link to="/Showpage" className="link">Home</Link>
   {user ? <Link to="/" className="link">Dashboard</Link> : ""}
   {user ? (<button onClick={logoff} className="btn__logout">Logout</button>) : 
   (
    <>
   <Link to="/Register" className="link">Register</Link> 
   <Link to="/Login" className="link">Login</Link>
   </>
   )
   }  
   </div>
   </div>
   </div>
  )
}

export default Header