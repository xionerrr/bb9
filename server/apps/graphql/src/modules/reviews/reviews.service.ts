import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Review } from '@prisma/client'

import { CreateReviewDto, FindReviewsDto, UpdateReviewDto } from './dtos'

import { PrismaService } from '@app/common/modules'
import { PrintService } from '@app/common/services'

@Injectable()
export class ReviewsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly printService: PrintService,
  ) {}

  async getAll(
    input: FindReviewsDto,
  ): Promise<{ reviews: Review[]; total: string }> {
    const { limit, page, title } = input

    try {
      const total = await this.prismaService.review.count()

      if (isNaN(Number(page))) {
        const reviews = await this.prismaService.review.findMany({
          take: !Number(limit) ? total : Number(limit),
          where: {
            text1: {
              contains: title,
              mode: 'insensitive',
            },
          },
        })

        return {
          reviews,
          total: String(total),
        }
      } else {
        const reviews = await this.prismaService.review.findMany({
          skip: (Number(page) - 1) * Number(limit),
          take: Number(limit),
          where: {
            text1: {
              contains: title,
              mode: 'insensitive',
            },
          },
        })

        return {
          reviews,
          total: String(total),
        }
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

  async getOne(reviewId: number): Promise<Review> {
    try {
      const review = await this.prismaService.review.findFirst({
        where: {
          id: reviewId,
        },
      })

      if (!review)
        throw new NotFoundException(`Review with id: ${reviewId} not found`)

      return review
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }

  async create(input: CreateReviewDto): Promise<Review> {
    try {
      const review = await this.prismaService.review.create({
        data: input,
      })

      await this.printService.print(review)

      return review
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }

  async update(input: UpdateReviewDto): Promise<Review> {
    const { id: reviewId, ...data } = input

    try {
      const reviewExists = await this.prismaService.review.findFirst({
        where: {
          id: Number(reviewId),
        },
      })

      if (!reviewExists)
        throw new NotFoundException(`Review with id: ${reviewId} not found`)

      const review = await this.prismaService.review.update({
        where: {
          id: Number(reviewId),
        },
        data,
      })

      await this.printService.print(review)

      return review
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }

  async delete(reviewId: number): Promise<Review> {
    try {
      const reviewExists = await this.prismaService.review.findFirst({
        where: {
          id: reviewId,
        },
      })

      if (!reviewExists)
        throw new NotFoundException(`Review with id: ${reviewId} not found`)

      const review = await this.prismaService.review.delete({
        where: {
          id: reviewId,
        },
      })

      return review
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
