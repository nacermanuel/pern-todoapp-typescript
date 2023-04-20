import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from './slice.js'

export const store = configureStore({
  reducer: {
    counter: reduxReducer,
  },
})