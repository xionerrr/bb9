import { I_MealProps } from './models'
import * as S from './styles/mealSubmit.styles'

export const MealSubmit = ({ register, errors, isLoading }: I_MealProps) => {
  return (
    <S.Inner>
      <S.Field>
        <S.Label>User Nickname</S.Label>
        <S.TextField {...register('nickname', { required: true })} />
        {errors.nickname && <S.Point>!</S.Point>}
      </S.Field>
      <S.Button disabled={isLoading}>Update Review</S.Button>
    </S.Inner>
  )
}
