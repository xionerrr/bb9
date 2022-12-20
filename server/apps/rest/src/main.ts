import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { RestModule } from './rest.module'

import '@app/common/utils/'

async function bootstrap() {
  const app = await NestFactory.create(RestModule, {
    cors: {
      origin: '*',
      credentials: true,
    },
  })
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('REST API')
    .setDescription('The REST API Description')
    .setVersion('0.0.1')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api-docs', app, document)

  await app.listen(8001)
}
bootstrap()
