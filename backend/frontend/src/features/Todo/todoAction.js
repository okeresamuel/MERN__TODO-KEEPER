import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";



//send todo to backend
export const  postTodo = createAsyncThunk("todo/addTodo", async (data, thunkAPI, rejectWithValue)=>{
try {
  const token = thunkAPI.getState().auth.user.token
  const config = {
   headers: {
       Authorization: `Bearer ${token}`,
       "Content-Type": "application/json"
      },
 };
 const response = await axios.post("http://localhost:3000/api/todos", data, config)
 return response.data
} catch (error) {
  return rejectWithValue(error.response.data)
}


})

//get todo from backend
export const  getTodo = createAsyncThunk("todo/addTodo", async ( _, thunkAPI, rejectWithValue)=>{
 try {
  const token = thunkAPI.getState().auth.user.token
  const config = {
   headers:{
     Authorization: `Bearer ${token}`
   }  
  }
  const response = await axios.get("http://localhost:3000/api/todos", config)
  return response.data  
 } catch (error) {
  return rejectWithValue(error.response.data)
 }
 })

//  delete todo from backend
export const deleteTodo = createAsyncThunk("delete/Todo", async(id, thunkAPI, rejectWithValue)=>{
  try {
    const token = thunkAPI.getState().auth.user.token
    const config = {
        headers:{
          Authorization: `Bearer ${token}`      
        }
    }
   const deleted = await axios.delete(`http://localhost:3000/api/todos/${id}`, config)
   return deleted
  } catch (error) {
    return rejectWithValue(error.response.data)
   }
})

// update todo from back

export const updateTodo = createAsyncThunk("update/Todo", async(id, thunkAPI, rejectWithValue)=>{
  try {

  const token = thunkAPI.getState().auth.user.token

  const config ={
    headers:{
      Authorization: `Bearer ${token}`,
      "Accept": "application/json",
    }
  }
 
 const updatedTodo = await axios.put(`https://todo-app-myreactapp.herokuapp.com/api/todos/${id}`,{text:"hekko"},  config )
} catch (error) {
  return rejectWithValue(error)
}

})

