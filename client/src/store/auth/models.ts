import { T_User } from 'models/user'

export interface I_InitialState {
  isAuth: boolean
  userInfo: T_User
}
