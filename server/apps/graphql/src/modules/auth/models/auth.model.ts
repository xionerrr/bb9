import { User } from '@prisma/client'

export interface I_Auth extends Omit<User, 'hashedPass' | 'hashedRt'> {
  access_token: string
  refresh_token: string
}
