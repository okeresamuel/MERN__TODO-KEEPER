import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const registerUser = createAsyncThunk("auth/register", async (userInfo, { rejectWithValue }) => {
try {

let response = await axios.post('api/users/register', userInfo)
if(response.data){
 localStorage.setItem("user", JSON.stringify(response.data))   
 return response.data 
} 
} catch (error) {
    return rejectWithValue(error.response.data)
}
}

)

//login 
export const loginUser = createAsyncThunk("auth/login", async (userInfo, { rejectWithValue }) => {
    try {
    
    let response = await axios.post('api/users/login', userInfo)
    if(response.data){
      localStorage.setItem("user", JSON.stringify(response.data))   
      return response.data 
    } 
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
    }
    
    )

export const logout = createAsyncThunk("auth/logout", async (userInfo, { rejectWithValue }) => {
localStorage.removeItem("user")   
})
    