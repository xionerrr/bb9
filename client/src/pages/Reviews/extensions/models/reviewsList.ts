import { T_Review } from 'models/reviews'

export type T_ReviewsProps = {
  reviews: T_Review[]
  isReviewDeleted: boolean
  handleOpenReview: (reviewId: string) => void
  handleEditReview: (reviewId: string) => void
  handleDeleteReview: (reviewId: string) => void
}

export enum E_ReviewButton {
  edit = 'edit',
  delete = 'delete',
}
