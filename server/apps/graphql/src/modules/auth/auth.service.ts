import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import * as argon2 from 'argon2'

import { SignInDto, SignUpDto } from './dtos'
import { TokensService } from './tokens.service'
import { I_Auth } from './models'

import { I_GetData } from '../../models'

import { PrismaService } from '@app/common/modules'

@Injectable()
export class AuthService {
  constructor(
    private tokensService: TokensService,
    private prismaService: PrismaService,
  ) {}

  async signIn(body: SignInDto): Promise<I_GetData<I_Auth>> {
    const { email, password } = body

    try {
      const user = await this.prismaService.user.findFirst({
        where: {
          email,
        },
      })

      const { hashedPass, hashedRt, ...rest } = user

      if (!user)
        throw new NotFoundException(`User with email ${email} not found`)

      const passwordMatches = await argon2.verify(hashedPass, password)

      if (!passwordMatches) throw new ForbiddenException('Incorrect password')

      const tokens = await this.tokensService.getTokens(user.id, user.email)
      await this.tokensService.updateRefreshToken(user.id, tokens.refresh_token)

      return {
        message: 'Successfully signed in',
        data: {
          ...tokens,
          ...rest,
        },
        timestamp: new Date(),
      }
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }

  async signUp(body: SignUpDto): Promise<I_GetData<I_Auth>> {
    const { email, password } = body

    try {
      const userExists = await this.prismaService.user.findFirst({
        where: {
          email,
        },
      })

      if (userExists)
        throw new ForbiddenException(`User with email: ${email} already exists`)

      const hashedPassword = await argon2.hash(password)

      const user = await this.prismaService.user.create({
        data: {
          email,
          hashedPass: hashedPassword,
        },
      })

      const { hashedPass, hashedRt, ...rest } = user

      const tokens = await this.tokensService.getTokens(rest.id, rest.email)
      await this.tokensService.updateRefreshToken(rest.id, tokens.refresh_token)

      return {
        message: 'Successfully signed up',
        data: {
          ...tokens,
          ...rest,
        },
        timestamp: new Date(),
      }
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }
}
