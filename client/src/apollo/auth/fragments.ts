import { gql } from '@apollo/client'

export const AUTH_FIELDS = gql`
  fragment AuthParts on Auth {
    access_token
    refresh_token
    id
    email
    created_at
    updated_at
  }
`
