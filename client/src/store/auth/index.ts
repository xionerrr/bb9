import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState, userInfo } from './data'

import { T_User } from 'models/user'

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setAuthorized: (state, action: PayloadAction<{ isAuth: boolean; userInfo: T_User }>) => {
      const { isAuth, userInfo } = action.payload
      state.isAuth = isAuth
      state.userInfo = userInfo
    },
    setUnauthorized: (state) => {
      state.isAuth = false
      state.userInfo = userInfo
    },
  },
})

export const { setAuthorized, setUnauthorized } = authSlice.actions
