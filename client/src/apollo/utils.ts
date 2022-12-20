import { ApolloClient, InMemoryCache } from '@apollo/client'

import { LocalStorage } from 'utils'

export const client = new ApolloClient({
  uri: `${import.meta.env.VITE_SERVER_LINK}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${LocalStorage.getAuthToken()}`,
  },
})
