import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from '@apollo/client/link/error';

const setAuthToken = () => {
  const token = localStorage.getItem('token')
  if(!!token)
    return `Bearer ${ token }`

  return null
}

// const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URI })
const httpLink = createUploadLink({ 
  uri: process.env.NODE_ENV === 'development' 
        ? process.env.REACT_APP_DEV_API_URI
        : process.env.REACT_APP_PROD_API_URI 
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${ message }, Location: ${ locations }, Path: ${ path }`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${ networkError }`);
})

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: setAuthToken()
    }
  })

  return forward(operation)
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    errorLink,
    authMiddleware,
    httpLink
  ])
})