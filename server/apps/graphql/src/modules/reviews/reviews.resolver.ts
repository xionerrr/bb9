import { Injectable, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Review } from '@prisma/client'

import { CreateReviewDto, FindReviewsDto, UpdateReviewDto } from './dtos'
import { ReviewsService } from './reviews.service'

import { GqlAuthGuard } from '../../guards'

@Injectable()
@Resolver('Review')
export class ReviewsResolver {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Query('reviews')
  getAll(
    @Args('input') input?: FindReviewsDto,
  ): Promise<{ reviews: Review[]; total: string }> {
    return this.reviewsService.getAll(input)
  }

  @Query('review')
  getOne(@Args('id') reviewId: string): Promise<Review> {
    return this.reviewsService.getOne(Number(reviewId))
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('createReview')
  create(@Args('input') input: CreateReviewDto): Promise<Review> {
    return this.reviewsService.create(input)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('updateReview')
  update(@Args('input') input: UpdateReviewDto): Promise<Review> {
    return this.reviewsService.update(input)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('deleteReview')
  delete(@Args('id') reviewId: string): Promise<Review> {
    return this.reviewsService.delete(Number(reviewId))
  }
}
