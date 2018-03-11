'use strict'

import { graphql } from 'react-relay'
import {
  getNoauthApi,
} from '../apiManager'

import BaseError from '../../BaseError'

const mutation = graphql`
  mutation signupMutation(
    $input: SignupInput!
  ) {
    signup(input: $input) {
      profile { 
        nodeId 
        id
        displayName
      }
    }
  }
`

export class SignupError extends BaseError {}

export default function signup ({displayName, email, password}) {
  const variables = {
    input: {
      displayName,
      email,
      password
    }
  }

  return new Promise((resolve, reject) => {
    const successHandler = (response) => {
      if (!response || !response.signup) {
        return reject(new SignupError('Signup: Already logged in.'))
      }

      const profile = response.signup.profile
      if (!profile || profile === 'undefined' || typeof profile === 'undefined') {
        return reject(new SignupError('Signup: Email already registered.'))
      }

      return resolve(response.signup)
    }

    const api = getNoauthApi()
    api.commitMutation({
      mutation,
      variables,
      onCompleted: successHandler,
      onError: () => {
        reject(new SignupError('Signup: Email is unavailable or invalid.'))
      }
    })
  })
}
