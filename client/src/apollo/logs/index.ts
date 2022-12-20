import { gql } from '@apollo/client'

export const CREATE_LOG = gql`
  mutation writeFile(
    $text1: String!
    $text2: String!
    $text3: String!
    $description: String
    $summary: String!
    $nickname: String!
  ) {
    writeFile(
      input: {
        text1: $text1
        text2: $text2
        text3: $text3
        description: $description
        summary: $summary
        nickname: $nickname
      }
    ) {
      text1
      text2
      text3
      description
      summary
      nickname
    }
  }
`
