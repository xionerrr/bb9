import { FormEvent } from 'react'

import { T_ReviewsHeaderProps } from './models'
import * as S from './styles/reviewsHeader'

import Union from 'assets/images/Union.svg'

export const ReviewsHeader = ({ value, setValue }: T_ReviewsHeaderProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <S.HeaderWrapper>
      <S.Label>Reviews List</S.Label>
      <S.ActionsBox>
        <S.Form onSubmit={handleSubmit}>
          <S.TextField
            placeholder='Search by review title'
            autoFocus
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <S.Submit type='submit'>
            <Union />
          </S.Submit>
        </S.Form>
      </S.ActionsBox>
    </S.HeaderWrapper>
  )
}
