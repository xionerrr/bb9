import { IsOptional } from 'class-validator'

export class FindReviewsDto {
  @IsOptional()
  title?: string

  @IsOptional()
  limit?: string

  @IsOptional()
  page?: string
}
