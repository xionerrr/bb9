import { MealForm } from './extensions'
import * as S from './styles'

export const CreateReview = () => {
  return (
    <S.Inner>
      <S.ReviewWrapper>
        <S.Title>Meal Review Create</S.Title>
        <MealForm />
      </S.ReviewWrapper>
    </S.Inner>
  )
}
