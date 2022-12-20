import { Injectable } from '@nestjs/common'
import * as AWS from '@aws-sdk/client-sqs'
import { ConfigService } from '@nestjs/config'
import { Review } from '@prisma/client'

@Injectable()
export class SqsService {
  constructor(private readonly configService: ConfigService) {}

  client = new AWS.SQS({
    endpoint: this.configService.get<string>('AWS_SQS_ENDPOINT'),
    region: this.configService.get<string>('AWS_SQS_REGION'),
    credentials: {
      accessKeyId: this.configService.get<string>('AWS_SQS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>(
        'AWS_SQS_SECRET_ACCESS_KEY',
      ),
    },
  })

  async sendMessage(message: Review) {
    await this.client.sendMessage({
      MessageBody: JSON.stringify(message),
      QueueUrl: 'queue1.fifo',
      MessageGroupId: String(message.id),
    })
  }

  async receiveMessageList(limit: number, queueUrl?: string) {
    return await this.client.receiveMessage({
      MaxNumberOfMessages: limit,
      QueueUrl: !queueUrl ? '' : queueUrl,
    })
  }
}
