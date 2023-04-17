import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from './CLONslice.js'

export const store = configureStore({
  reducer: {
    counter: reduxReducer,
  },
})
