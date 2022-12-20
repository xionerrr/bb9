import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'

import { AuthModule, InfoModule, ReviewsModule, UsersModule } from './modules'

import { PrismaModule } from '@app/common/modules'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ReviewsModule,
    InfoModule,
  ],
})
export class GraphqlModule {}
