import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

import { T_EditReview } from 'pages/EditReview/models'

export interface I_MealProps {
  register: UseFormRegister<Omit<T_EditReview, 'id'>>
  errors: Partial<
    FieldErrorsImpl<{
      text1: string
      text2: string
      text3: string
      description: string
      summary: string
      checkbox: boolean
      nickname: string
    }>
  >
  isLoading?: boolean
}
