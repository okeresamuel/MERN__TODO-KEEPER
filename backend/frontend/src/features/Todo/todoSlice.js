import {createSlice} from "@reduxjs/toolkit"
import {postTodo, getTodo, deleteTodo, updateTodo} from "./todoAction"

const initialState = {
    todo: [],
    loading: false,
    error: false,
    success: false,
    message: "",
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        reset: (state) =>{
         state.todo = []
         state.loading = false
         state.error = false
         state.success =  false
         state.message = ""
       },
    },
    extraReducers: {
    //posting todo to my backend
     [postTodo.pending]: (state)=>{
        state.loading = true
        state.success = false
     },
     [postTodo.fulfilled]: (state, action)=>{
        state.loading = false
        state.error = false
        state.success = true
        state.todo.push(action.payload)
     },
     [postTodo.rejected]: (state, action)=>{
        state.loading = false
        state.error = true
        state.success =  false
     },
    // receiving todo from backend

    [getTodo.pending]: (state)=>{
        state.loading = true
     },
     [getTodo.fulfilled]: (state, action)=>{
        state.loading = false
        state.success = true
        state.todo = action.payload
     },
     [getTodo.rejected]: (state, action)=>{
        state.loading = false
        state.error = action.payload
        state.success =  false
     },
     
    //deleting todo from backend   
     [deleteTodo.pending]: (state)=>{
      state.loading = true
      state.error = false
     },
     [deleteTodo.fulfilled]: (state, action)=>{
      state.loading = false
      state.error = false
      state.success = true
      state.todo = state.todo.filter((i) => i._id !== action.payload.id)
     },
     [deleteTodo.rejected]: (state, action)=>{
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
     },


    //updating todo   
     [updateTodo.pending]:(state)=>{
       state.loading = true
       state.error = false
     },
     [updateTodo.fulfilled]:(state, action)=>{
      state.loading = false
      state.success = true
      state.error = false
      state.message = action.payload
    },
    [updateTodo.rejected]:(state, action)=>{
      state.loading = true
      state.error = false
      state.message = action.payload
    },
    }
})

export const {reset} = todoSlice.actions;
export default todoSlice.reducer;