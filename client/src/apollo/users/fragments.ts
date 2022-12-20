import { gql } from '@apollo/client'

export const USER_FIELDS = gql`
  fragment UserParts on User {
    id
    email
    created_at
    updated_at
  }
`
