import { useLazyQuery } from '@apollo/client'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { MealForm } from './extensions'
import * as S from './styles'

import { GET_REVIEW } from 'apollo'
import { Loader } from 'components'
import { T_Review } from 'models/reviews'
import { NotFound } from 'pages/NotFound'

export const Review = () => {
  const [review, setReview] = useState<T_Review>()

  const [getReview, { data: reviewData, loading, error }] = useLazyQuery<{ review: T_Review }>(
    GET_REVIEW,
  )

  const params = useParams<{ reviewId: string }>()

  useLayoutEffect(() => {
    getReview({
      variables: {
        id: params.reviewId,
      },
    })
  }, [])

  useEffect(() => {
    if (reviewData) setReview(reviewData.review)
  }, [reviewData])

  if (loading) return <Loader />

  if (error) return <NotFound />

  if (review)
    return (
      <S.Inner>
        <S.ReviewWrapper>
          <S.Title>Meal Review</S.Title>
          <MealForm review={review} />
        </S.ReviewWrapper>
      </S.Inner>
    )

  return <Loader />
}
