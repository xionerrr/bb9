import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { MealComponents } from './MealComponents'
import { MealReview } from './MealReview'
import { MealSubmit } from './MealSubmit'
import * as S from './styles/mealForm.styles'

import { T_CreateReviewFormData } from '../models'

import { CREATE_REVIEW, GET_REVIEWS } from 'apollo'
import { E_Routes } from 'models/routes'
import { Divider } from 'styles/components'
import { ToastifyRoot } from 'utils'

export const MealForm = () => {
  const navigate = useNavigate()

  const [createReview, { data: createReviewData, loading: isLoading, error: reviewCreateError }] =
    useMutation<T_CreateReviewFormData>(CREATE_REVIEW, {
      refetchQueries: () => [
        {
          query: GET_REVIEWS,
          variables: {
            title: '',
            limit: '10',
            page: 'none',
          },
        },
      ],
    })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<T_CreateReviewFormData>({
    defaultValues: {
      text1: '',
      text2: '',
      text3: '',
      description: '',
      summary: '',
      nickname: '',
      checkbox: false,
    },
  })

  const handleCreateReview = (data: T_CreateReviewFormData) => {
    createReview({
      variables: {
        ...data,
      },
    })
  }

  useEffect(() => {
    if (createReviewData)
      if (reviewCreateError) {
        ToastifyRoot.error(reviewCreateError.message)
      } else if (!reviewCreateError) {
        ToastifyRoot.success('Success')
        navigate(E_Routes.reviews)
      }
  }, [reviewCreateError, createReviewData])

  return (
    <S.Form onSubmit={handleSubmit(handleCreateReview)}>
      <MealComponents register={register} errors={errors} />
      <Divider />
      <MealReview register={register} errors={errors} />
      <MealSubmit register={register} errors={errors} isLoading={isLoading} />
    </S.Form>
  )
}
