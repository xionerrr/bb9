import { Injectable } from '@nestjs/common'
import { Review } from '@prisma/client'
import { writeFile } from 'fs/promises'
import { join } from 'path'

@Injectable()
export class PrintService {
  async print(body: Review) {
    await writeFile(
      join('restinput', `review${Date.now()}.json`),
      JSON.stringify(body),
    )
  }
}
