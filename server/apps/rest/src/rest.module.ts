import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { PrintModule } from './modules'

import { PrismaModule } from '@app/common/modules'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PrintModule,
  ],
})
export class RestModule {}
