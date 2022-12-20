import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { TokensService } from './tokens.service'
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies'

@Module({
  imports: [JwtModule.register({})],
  providers: [
    AuthService,
    AuthResolver,
    TokensService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
