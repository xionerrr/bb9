import { gql } from '@apollo/client'

export const GET_INFO = gql`
  query getInfo {
    getInfo {
      message
      data {
        id
        email
        created_at
        updated_at
      }
      timestamp
    }
  }
`
