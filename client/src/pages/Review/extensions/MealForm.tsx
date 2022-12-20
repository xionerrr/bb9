import { MealComponents } from './MealComponents'
import { MealReview } from './MealReview'
import { MealSubmit } from './MealSubmit'
import { I_MealProps } from './models'
import * as S from './styles/mealForm.styles'

import { Divider } from 'styles/components'

export const MealForm = ({ review }: I_MealProps) => {
  return (
    <S.Form>
      <MealComponents review={review} />
      <Divider />
      <MealReview review={review} />
      <MealSubmit review={review} />
    </S.Form>
  )
}
