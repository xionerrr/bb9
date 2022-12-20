import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authSlice } from './auth'
import { UISlice } from './ui'

const rootReducer = combineReducers({
  [UISlice.name]: UISlice.reducer,
  [authSlice.name]: authSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
