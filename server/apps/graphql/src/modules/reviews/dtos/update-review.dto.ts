import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateReviewDto {
  @IsString()
  @IsNotEmpty()
  id: string

  @IsOptional()
  text1: string

  @IsOptional()
  text2: string

  @IsOptional()
  text3: string

  @IsOptional()
  description: string

  @IsOptional()
  summary: string

  @IsOptional()
  nickname: string
}
