import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

import { T_CreateReview } from 'pages/CreateReview/models'

export interface I_MealProps {
  register: UseFormRegister<T_CreateReview>
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
