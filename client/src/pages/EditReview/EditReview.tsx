import { MealForm } from './extensions'
import * as S from './styles'

export const EditReview = () => {
  return (
    <S.Inner>
      <S.ReviewWrapper>
        <S.Title>Meal Review Update</S.Title>
        <MealForm />
      </S.ReviewWrapper>
    </S.Inner>
  )
}
