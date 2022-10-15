import React from 'react'
import "../Register/Register.scss"
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from "../../features/Auth/userActions"
import {reset} from "../../features/Auth/Authslice"


function Register() {
  let forms = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  } 
 const [form, setFormField] = useState(forms)
 const {username, email, password, confirmPassword } = form
 function setFields(e){
   let { value, name } = e.target
   setFormField({...form, [name]:value});
  }

 const navigate = useNavigate()
 const dispatch = useDispatch()
 const {user, success, error, loading} = useSelector((state) => state.auth)

 useEffect(() => {
  if (error){
    toast.error(`${error} please try again `)
    dispatch(reset())
  } 
  if(user){
    navigate("/")
   }
}, [navigate, user, error, success])



 function stopRefresh(event){
  event.preventDefault()
  if(password !== confirmPassword){
     toast.error("passwords do not match")
  }else{
    const userInfo = {
      username,
      email,
      password
   }
    dispatch(registerUser(userInfo))
  }
 
}
  return (
    <>
    <h1>Register . . . </h1>
    {loading ? <Loader /> : "" }
    <form onSubmit={stopRefresh} >
     <div className='input__container'>
     <label for="username">username</label>
     <input   className='input' name='username' id='username' value={username} placeholder=" Name" onChange={setFields}></input>
     </div>
      
     <div className='input__container'>
     <label for="email">email</label>
     <input className='input' name='email' id='email' value={email} placeholder="Email" onChange={setFields}></input>
     </div>

     <div className='input__container'>
     <label for="password">password</label>
     <input  className='input' name='password' id='password' value={password} placeholder=" Password" onChange={setFields} ></input>
     </div>
      
      
     <div className='input__container'>
     <label for="confirmPassword">confirmPassword</label>
     <input  className='input' name='confirmPassword' id='confirmPassword' value={confirmPassword} placeholder="confirm Password" onChange={setFields}></input>
     <button  className='input__btn'>Register</button>
     </div>
    </form>
    </>
  )
}

export default Register