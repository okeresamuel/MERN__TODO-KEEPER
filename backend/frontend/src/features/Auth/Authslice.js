import {createSlice,} from "@reduxjs/toolkit" 
import { registerUser, loginUser, logout} from "./userActions"

let user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user : null,
  loading:false,
  error: false,
  success: false,
}

const Authslice = createSlice({
  name:"Auth",
  initialState,
  reducers:{
    reset: (state)=> {
     state.user = null
     state.loading = false
     state.error = false
     state.success = false
    }
  },
  extraReducers:{
    [registerUser.pending]: (state)=>{
     state.loading = true
     state.error = false
    },
    [registerUser.fulfilled]: (state, action)=>{
      state.loading = false
      state.error = false
      state.success = true
      state.user = action.payload
     },
     [registerUser.rejected]: (state, action)=>{
      state.loading = false
      state.error = action.payload
     },
     
     //Login user
     [loginUser.pending]: (state)=>{
      state.loading = true
      state.error = false
     },

     [loginUser.fulfilled]: (state, action)=>{
      state.loading = false
      state.error = false
      state.success = true
      state.user = action.payload
     },
     [loginUser.rejected]: (state, action)=>{
      state.loading = false
      state.success = false
      state.error = action.payload
     },

     //logout user
     [logout.fulfilled]: (state, action)=>{
      state.user = action.payload
      state.success = true
     }
  }
})

export const {reset} = Authslice.actions
export default Authslice.reducer