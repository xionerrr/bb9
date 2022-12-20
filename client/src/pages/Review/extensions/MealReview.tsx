import { I_MealProps } from './models'
import * as S from './styles/mealReview.styles'

import MainItem from 'assets/images/Item.svg'
import Star from 'assets/images/Star.svg'

export const MealReview = ({ review }: I_MealProps) => {
  return (
    <S.Inner>
      <S.Title>Meal Review</S.Title>
      <S.Components>
        <S.Content>
          <S.Avatar>
            <MainItem />
          </S.Avatar>
          <S.Label>Morroccan Chicken With Couscous</S.Label>
          <S.Rate>
            {[...Array(5)].map((_, index) => (
              <Star key={index} fill={index < 5 ? '#F2AE04' : '#BEC1C4'} />
            ))}
            <S.RateTypography>5/5</S.RateTypography>
          </S.Rate>
        </S.Content>
        <S.TextArea value={review.summary} />
      </S.Components>
    </S.Inner>
  )
}
