import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './articleSlice'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    article: articleReducer
  },
})

export default store