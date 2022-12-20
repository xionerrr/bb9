import { gql } from '@apollo/client'

import { USER_FIELDS } from './fragments'

export const GET_USERS = gql`
  ${USER_FIELDS}
  query getUsers {
    users {
      ...UserParts
    }
  }
`

export const GET_USER = gql`
  ${USER_FIELDS}
  query getUser($id: ID!) {
    user(id: $id) {
      ...UserParts
    }
  }
`

export const CREATE_USER = gql`
  ${USER_FIELDS}
  query createUser($email: String!, $password: String!) {
    createUser(input: { email: $email, password: $password }) {
      ...UserParts
    }
  }
`
