import { Injectable, ForbiddenException } from '@nestjs/common'
import { Review } from '@prisma/client'
import { writeFile } from 'fs/promises'
import { join } from 'path'

@Injectable()
export class PrintService {
  async print(body: Review) {
    try {
      if (!body.id) throw new ForbiddenException('No body')

      await writeFile(
        join('restinput', `review${Date.now()}.json`),
        JSON.stringify(body),
      )
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
