import { Injectable, ForbiddenException, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Review } from '@prisma/client'
import { HttpService } from '@nestjs/axios'
import { writeFile } from 'fs/promises'
import { join } from 'path'

import { SqsService } from './sqs.service'

@Injectable()
export class PrintService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private sqsService: SqsService,
  ) {}

  logger = new Logger()

  async print(review: Review) {
    const type = this.configService.get<'sqs' | 'rest'>('TRANSPORT')
    const URL = 'http://localhost:8001/print'
    const requestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      if (type !== 'sqs' && type !== 'rest')
        return this.logger.error('Invalid type')

      switch (true) {
        case type === 'rest':
          await this.httpService.axiosRef.post(URL, review, requestConfig)
          return
        case type === 'sqs':
          await this.sqsService.sendMessage(review)
          const { Messages } = await this.sqsService.receiveMessageList(5, '')
          for (const message of Messages) {
            await writeFile(
              join('sqsinput', `review${Date.now()}.json`),
              JSON.stringify(message),
            )
          }
          return
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
