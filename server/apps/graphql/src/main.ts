import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { GraphqlModule } from './graphql.module'

import '@app/common/utils'

async function bootstrap() {
  const app = await NestFactory.create(GraphqlModule, {
    cors: {
      origin: '*',
      credentials: true,
    },
  })
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(8000)
}
bootstrap()
