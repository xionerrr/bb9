import { useLazyQuery, useMutation } from '@apollo/client'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

import { ReviewsHeader, ReviewsList } from './extensions'
import * as S from './styles'

import { DELETE_REVIEW, GET_REVIEWS } from 'apollo'
import { Error, Loader } from 'components'
import { T_Review } from 'models/reviews'
import { ToastifyRoot } from 'utils'

export const Reviews = () => {
  const [reviews, setReviews] = useState<T_Review[]>([])
  const [totalReviews, setTotalReviews] = useState<number>(0)
  const [value, setValue] = useState<string>('')
  const [limit, setLimit] = useState<number>(10)

  const [debouncedValue] = useDebounce(value, 550)

  const navigate = useNavigate()

  const [getReviews, { data: reviewsData, loading, error }] = useLazyQuery<{
    reviews: { reviews: T_Review[]; total: string }
  }>(GET_REVIEWS)

  const [
    deleteReview,
    { data: reviewDeleteData, loading: isReviewDeleted, error: reviewDeleteError },
  ] = useMutation(DELETE_REVIEW, {
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

  useLayoutEffect(() => {
    getReviews({
      variables: {
        title: debouncedValue,
        limit: String(limit),
        page: 'none',
      },
    })
  }, [debouncedValue, limit])

  useEffect(() => {
    if (reviewsData) {
      setReviews(reviewsData.reviews.reviews)
      setTotalReviews(Number(reviewsData.reviews.total))
    }
  }, [reviewsData])

  const handleDeleteReview = (reviewId: string) => {
    deleteReview({
      variables: {
        id: reviewId,
      },
    })
  }

  const handleLoadMore = () => {
    setLimit((prev) => prev + 10)
  }

  const handleEditReview = (reviewId: string) => {
    navigate(`/details/edit/${reviewId}`)
  }

  const handleOpenReview = (reviewId: string) => {
    navigate(`/details/${reviewId}`)
  }

  useEffect(() => {
    if (!reviewDeleteError && reviewDeleteData) ToastifyRoot.success('Successfully deleted')
  }, [reviewDeleteError, reviewDeleteData])

  if (loading) return <Loader />

  if (!error && reviews)
    return (
      <S.Inner>
        <ReviewsHeader value={value} setValue={setValue} />
        <ReviewsList
          reviews={reviews}
          isReviewDeleted={isReviewDeleted}
          handleOpenReview={handleOpenReview}
          handleEditReview={handleEditReview}
          handleDeleteReview={handleDeleteReview}
        />
        {/* {reviews.length
          ? reviews.length !== totalReviews && <S.More onClick={handleLoadMore}>Load more</S.More>
          : null} */}
      </S.Inner>
    )

  return <Error />
}
