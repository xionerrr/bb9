import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { ReviewsResolver } from './reviews.resolver'
import { ReviewsService } from './reviews.service'

import { PrintService, SqsService } from '@app/common/services'

@Module({
  imports: [HttpModule],
  providers: [ReviewsResolver, ReviewsService, PrintService, SqsService],
})
export class ReviewsModule {}
