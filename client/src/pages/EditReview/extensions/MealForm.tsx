import { useLazyQuery, useMutation } from '@apollo/client'
import { useEffect, useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { MealComponents } from './MealComponents'
import { MealReview } from './MealReview'
import { MealSubmit } from './MealSubmit'
import * as S from './styles/mealForm.styles'

import { T_EditReview, T_EditReviewFormData } from '../models'

import { GET_REVIEW, GET_REVIEWS, UPDATE_REVIEW } from 'apollo'
import { Loader } from 'components'
import { T_Review } from 'models/reviews'
import { NotFound } from 'pages/NotFound'
import { Divider } from 'styles/components'
import { ToastifyRoot } from 'utils'

export const MealForm = () => {
  const params = useParams<{ reviewId: string }>()

  const [getReview, { data: reviewData, loading: isReviewDataLoading, error: reviewDataError }] =
    useLazyQuery<{ review: T_Review }>(GET_REVIEW)

  useLayoutEffect(() => {
    getReview({
      variables: {
        id: params.reviewId,
      },
    })
  }, [])

  const [updateReview, { data: updateReviewData, loading: isLoading, error: reviewUpdateError }] =
    useMutation<T_EditReview>(UPDATE_REVIEW, {
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
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Omit<T_EditReviewFormData, 'id'>>({
    defaultValues: {
      text1: '',
      text2: '',
      text3: '',
      description: '',
      summary: '',
      nickname: '',
    },
  })

  useLayoutEffect(() => {
    if (reviewData) {
      const { id, ...rest } = reviewData.review
      reset({ ...rest })
    }
  }, [reviewData])

  const handleEditReview = (data: Omit<T_EditReviewFormData, 'id'>) => {
    updateReview({
      variables: {
        id: params.reviewId,
        ...data,
      },
    })
  }

  useEffect(() => {
    if (updateReviewData)
      if (reviewUpdateError) {
        ToastifyRoot.error(reviewUpdateError.message)
      } else if (!reviewUpdateError) ToastifyRoot.success('Success')
  }, [reviewUpdateError, updateReviewData])

  if (isReviewDataLoading) return <Loader />

  if (reviewDataError) return <NotFound />

  return (
    <S.Form onSubmit={handleSubmit(handleEditReview)}>
      <MealComponents register={register} errors={errors} />
      <Divider />
      <MealReview register={register} errors={errors} />
      <MealSubmit register={register} errors={errors} isLoading={isLoading} />
    </S.Form>
  )
}
