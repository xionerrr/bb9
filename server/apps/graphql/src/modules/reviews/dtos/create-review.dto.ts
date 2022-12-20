import { IsString, IsNotEmpty } from 'class-validator'

export class CreateReviewDto {
  @IsString()
  @IsNotEmpty()
  text1: string

  @IsString()
  @IsNotEmpty()
  text2: string

  @IsString()
  @IsNotEmpty()
  text3: string

  @IsString()
  description: string

  @IsString()
  @IsNotEmpty()
  summary: string

  @IsString()
  @IsNotEmpty()
  nickname: string
}
