import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../features/Auth/Authslice';
import todoReducer from "../features/Todo/todoSlice"

export const store = configureStore({
  reducer: {
   auth: AuthReducer,
   todo: todoReducer
  },
});

