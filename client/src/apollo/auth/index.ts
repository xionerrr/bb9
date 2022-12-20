import { gql } from '@apollo/client'

import { AUTH_FIELDS } from './fragments'

export const SIGN_IN = gql`
  ${AUTH_FIELDS}
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      message
      data {
        ...AuthParts
      }
      timestamp
    }
  }
`

export const SIGN_UP = gql`
  ${AUTH_FIELDS}
  mutation SignUp($email: String!, $password: String!) {
    signUp(input: { email: $email, password: $password }) {
      message
      data {
        ...AuthParts
      }
      timestamp
    }
  }
`
