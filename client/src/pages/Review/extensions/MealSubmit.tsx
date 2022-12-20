import { I_MealProps } from './models'
import * as S from './styles/mealSubmit.styles'

export const MealSubmit = ({ review }: I_MealProps) => {
  return (
    <S.Inner>
      <S.Field>
        <S.Label>User Nickname</S.Label>
        <S.TextField value={review.nickname} disabled />
      </S.Field>
    </S.Inner>
  )
}
