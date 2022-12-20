import { AnimatePresence, motion } from 'framer-motion'
import { MouseEvent, useState } from 'react'

import { E_ReviewButton, T_ReviewsProps } from './models'

import * as S from './styles/reviewsList'

import Star from 'assets/images/Star.svg'

export const ReviewsList = ({
  reviews,
  isReviewDeleted,
  handleOpenReview,
  handleEditReview,
  handleDeleteReview,
}: T_ReviewsProps) => {
  const [isActive, setIsActive] = useState<{
    type: E_ReviewButton | null
    id: string | null
  }>({
    type: null,
    id: null,
  })

  const handleEdit = (event: MouseEvent<HTMLButtonElement>, reviewId: string) => {
    event.stopPropagation()
    handleEditReview(reviewId)
  }

  const handleDelete = (event: MouseEvent<HTMLButtonElement>, reviewId: string) => {
    event.stopPropagation()
    handleDeleteReview(reviewId)
  }

  const handleSetActive = (id: string, type: E_ReviewButton) => {
    setIsActive({
      id,
      type,
    })
  }

  const handleSetDisabled = () => {
    setIsActive({
      id: null,
      type: null,
    })
  }

  return (
    <S.MainWrapper>
      {reviews.map((review, index) => {
        return (
          <S.Review
            transition={{ duration: `0.${index + 1}` }}
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            key={review.id}
            onClick={() => handleOpenReview(review.id)}
          >
            <S.ContentBox>
              <S.Typography>Meal Review: {review.text1}</S.Typography>
              <S.Rate>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} fill={index < 3 ? '#F2AE04' : '#BEC1C4'} />
                ))}
              </S.Rate>
            </S.ContentBox>
            <AnimatePresence mode='wait'>
              <S.ActionsBox>
                <S.Button
                  $type={E_ReviewButton.edit}
                  onClick={(event) => handleEdit(event, review.id)}
                  onMouseEnter={() => handleSetActive(review.id, E_ReviewButton.edit)}
                  onMouseLeave={handleSetDisabled}
                >
                  {isActive.id === review.id && isActive.type === E_ReviewButton.edit ? (
                    <S.Attachment
                      initial={{ x: 12, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -12, opacity: 0 }}
                    >
                      Edit
                    </S.Attachment>
                  ) : (
                    <S.AttachmentMain
                      initial={{ x: -12, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 12, opacity: 0 }}
                    >
                      E
                    </S.AttachmentMain>
                  )}
                </S.Button>
                <S.Button
                  disabled={isReviewDeleted}
                  $type={E_ReviewButton.delete}
                  onClick={(event) => handleDelete(event, review.id)}
                  onMouseEnter={() => handleSetActive(review.id, E_ReviewButton.delete)}
                  onMouseLeave={handleSetDisabled}
                >
                  {isActive.id === review.id && isActive.type === E_ReviewButton.delete ? (
                    <S.Attachment
                      initial={{ x: 12, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -12, opacity: 0 }}
                    >
                      Delete
                    </S.Attachment>
                  ) : (
                    <S.AttachmentMain
                      initial={{ x: -12, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 12, opacity: 0 }}
                    >
                      D
                    </S.AttachmentMain>
                  )}
                </S.Button>
              </S.ActionsBox>
            </AnimatePresence>
          </S.Review>
        )
      })}
    </S.MainWrapper>
  )
}
