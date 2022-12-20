import { I_InitialState } from './models'

export const userInfo = {
  id: '0',
  email: '',
  updated_at: '',
  created_at: '',
}

export const initialState: I_InitialState = {
  isAuth: false,
  userInfo,
}
