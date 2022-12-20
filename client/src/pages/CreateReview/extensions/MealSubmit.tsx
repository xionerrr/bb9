import { I_MealProps } from './models'
import * as S from './styles/mealSubmit.styles'

export const MealSubmit = ({ register, errors, isLoading }: I_MealProps) => {
  return (
    <S.Inner>
      <S.Field>
        <S.Label>Your Nickname (other users will see this)</S.Label>
        <S.TextField {...register('nickname', { required: true })} />
        {errors.nickname && <S.Point>!</S.Point>}
      </S.Field>
      <S.Action>
        <S.Checkbox type='checkbox' {...register('checkbox', { required: true })} />
        <S.Typography>
          I confirm that I have read and accepted
          <S.CustomLink to='#'>Terms and Conditions</S.CustomLink> and
          <S.CustomLink to='#'>Privacy Policy</S.CustomLink>
        </S.Typography>
        {errors.checkbox && <S.PrivacyPoint>Your need to accept policy</S.PrivacyPoint>}
      </S.Action>
      <S.Button disabled={isLoading}>Submit Review</S.Button>
    </S.Inner>
  )
}
