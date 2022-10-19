import {useEffect, useState} from 'react'
import "./Login.scss"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { toast } from 'react-toastify';
import {loginUser} from "../../features/Auth/userActions"
import {reset} from "../../features/Auth/Authslice"
import Loader from '../../components/Loader/Loader'


function Login() {
  let Loginforms = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  } 
   // controlled form fields.
 const [form, setFormField] = useState(Loginforms)
 const {username, password} = form
 function setFields(e){
 let { value, name } = e.target
 setFormField({...form, [name]:value});
}

const dispatch = useDispatch()
const navigate = useNavigate()
const {error, loading,  user} = useSelector( state => state.auth )

useEffect(()=>{
  if(error){
    toast.error(`${error} `)
    dispatch(reset())
  }
if(user){
   navigate("/")
   toast.success(`Welcome back ${user.username}`)
 }
},[error,  user, navigate])


// Dispatch the form data to the action
function stopRefresh(event){
 event.preventDefault()
 if(!username || !password){
  toast.error("missing fields")
 }else{
   const loginFields = {
    username: username,
    password: password,
   }
   dispatch(loginUser(loginFields))
 }
 }


  return (
    <>
    <h1>Login . . . </h1>
    {loading ? <Loader /> : ""}
    <form onSubmit={stopRefresh} >
     <div className='input__container'>
     <label for="username">username</label>
     <input className="input" name='username' id='username' value={username} placeholder=" Name" onChange={setFields}></input>
     </div>

     <div className='input__container'>
     <label for="password">password</label>
     <input className="input" name='password' id='password' value={password} placeholder=" Password" onChange={setFields}></input>
     <button className='input__btn'>Login</button>
     </div>
    </form>
    </>
  )
}

export default Login