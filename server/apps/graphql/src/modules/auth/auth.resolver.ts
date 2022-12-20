import { Injectable } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { SignInDto, SignUpDto } from './dtos'
import { I_Auth } from './models'

import { I_GetData } from '../../models'

@Injectable()
@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('signIn')
  signIn(@Args('input') body: SignInDto): Promise<I_GetData<I_Auth>> {
    return this.authService.signIn(body)
  }

  @Mutation('signUp')
  signUp(@Args('input') body: SignUpDto): Promise<I_GetData<I_Auth>> {
    return this.authService.signUp(body)
  }
}
