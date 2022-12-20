import { components } from './data'
import { I_MealProps } from './models'
import * as S from './styles/mealComponents.styles'

import { T_EditReview } from '../models'

import Star from 'assets/images/Star.svg'

export const MealComponents = ({ register, errors }: I_MealProps) => {
  return (
    <S.Inner>
      <S.Title>Meal Components</S.Title>
      <S.Wrapper>
        {components.map((component) => {
          const text = `text${component.id}` as keyof Omit<T_EditReview, 'id'>
          return (
            <S.Component key={component.id}>
              <S.Content>
                <S.Avatar>{component.avatar}</S.Avatar>
                <S.Information>
                  <S.Label>{component.label}</S.Label>
                  <S.Rate>
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        fill={index < Number(component.rate) ? '#F2AE04' : '#BEC1C4'}
                      />
                    ))}
                  </S.Rate>
                </S.Information>
              </S.Content>
              <S.Actions>
                <S.TextField
                  placeholder='Your thoughts about the component'
                  {...register(text, { required: true })}
                />
                {errors[text] && <S.Point>!</S.Point>}
              </S.Actions>
            </S.Component>
          )
        })}
      </S.Wrapper>
    </S.Inner>
  )
}
