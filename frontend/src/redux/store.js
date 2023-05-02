import { configureStore } from '@reduxjs/toolkit'
import tareasReducer from './feature/tareasSlice.js'

export const store = configureStore({
  reducer: {
    todo_app: tareasReducer,
  },
})