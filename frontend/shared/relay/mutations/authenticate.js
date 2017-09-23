'use strict'

import { graphql } from 'react-relay'
import {
  getNoauthApi,
  getApi,
  setToken,
} from '../apiManager'

import BaseError from '../../BaseError'

const mutation = graphql`
  mutation authenticateMutation(
    $input: AuthenticateInput!
  ) {
    authenticate(input: $input) {
      jwt
    }
  }
`

export class AuthenticateError extends BaseError {}

export default function authenticate ({email, password}) {
  const variables = {
    input: {
      email,
      password
    }
  }

  return new Promise((resolve, reject) => {
    const successHandler = (response) => {
      if (!response || !response.authenticate) {
        setToken(null)
        return reject(new AuthenticateError('Authentication: Cannot log-in twice.'))
      }

      const jwt = response.authenticate.jwt
      if (!jwt || jwt === 'undefined' || typeof jwt === 'undefined') {
        setToken(null)
        return reject(new AuthenticateError('Authentication: Double-check your credentials and try again.'))
      }

      setToken(jwt)
      const api = getApi()
      api.fetch('/setJwt', { // XXX : This is the wrong way to do this.  This is a stop-gap.
        body: JSON.stringify({
          jwt: jwt
        })
      }).then(resolve(response.authenticate))
    }

    const api = getNoauthApi()
    api.commitMutation({
      mutation,
      variables,
      onCompleted: successHandler,
      onError: () => {
        return reject(new AuthenticateError('Authentication: Already logged in.'))
      }
    })
  })
}
