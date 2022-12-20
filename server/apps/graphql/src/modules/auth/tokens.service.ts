import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'

import { T_Tokens } from '../../models'

import { PrismaService } from '@app/common/modules'

@Injectable()
export class TokensService {
  constructor(
    private readonly configService: ConfigService,
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async getTokens(userId: number, email: string): Promise<T_Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get<string>('ACCESS_TOKEN'),
          expiresIn: 60 * 60 * 24,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get<string>('REFRESH_TOKEN'),
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ])

    return {
      access_token: at,
      refresh_token: rt,
    }
  }

  async updateRefreshToken(
    userId: number,
    refreshToken: string,
  ): Promise<void> {
    const hash = await argon2.hash(refreshToken)
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    })
  }
}
