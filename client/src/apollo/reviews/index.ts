import { gql } from '@apollo/client'

import { REVIEW_FIELDS } from './fragments'

export const GET_REVIEWS = gql`
  ${REVIEW_FIELDS}
  query allReviews($title: String, $limit: String, $page: String) {
    reviews(input: { title: $title, limit: $limit, page: $page }) {
      reviews {
        ...ReviewParts
      }
      total
    }
  }
`

export const GET_REVIEW = gql`
  ${REVIEW_FIELDS}
  query review($id: ID!) {
    review(id: $id) {
      ...ReviewParts
    }
  }
`

export const CREATE_REVIEW = gql`
  ${REVIEW_FIELDS}
  mutation CreateReview(
    $text1: String!
    $text2: String!
    $text3: String!
    $description: String
    $summary: String!
    $nickname: String!
  ) {
    createReview(
      input: {
        text1: $text1
        text2: $text2
        text3: $text3
        description: $description
        summary: $summary
        nickname: $nickname
      }
    ) {
      ...ReviewParts
    }
  }
`

export const UPDATE_REVIEW = gql`
  ${REVIEW_FIELDS}
  mutation updateReview(
    $id: ID!
    $text1: String
    $text2: String
    $text3: String
    $description: String
    $summary: String
    $nickname: String
  ) {
    updateReview(
      input: {
        id: $id
        text1: $text1
        text2: $text2
        text3: $text3
        description: $description
        summary: $summary
        nickname: $nickname
      }
    ) {
      ...ReviewParts
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id) {
      id
    }
  }
`
