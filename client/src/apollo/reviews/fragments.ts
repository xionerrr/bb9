import { gql } from '@apollo/client'

export const REVIEW_FIELDS = gql`
  fragment ReviewParts on Review {
    id
    text1
    text2
    text3
    description
    summary
    nickname
  }
`
