'use strict'

import React from 'react'
import {setToken, getApi} from '../relay/apiManager'
import {graphql} from 'relay-runtime'

const mutation = graphql`
  mutation logoutMutation(
    $input: LogoutInput!
  ) {
    logout(input: $input) {
      boolean
    }
  }
`

const variables = { input: {} }

export const LOGOUT_ROUTE_PATH = '/logout'
export const LOGOUT_ROUTE = {
  path: LOGOUT_ROUTE_PATH,
  component: () => {
    if (process.env.APP_ENV === 'BROWSER') {
      document.cookie = 'jwt=;expires=Thu, 01 Jan 1970 00:00:00 GMT';

      let api = getApi()
      api.commitMutation({
        mutation,
        variables,
        onCompleted: (response) => {
          setToken(null)
          let api = getApi()
          window.location.reload()
        }
     })
    }
    return <div>Logging out...</div>
  },
  query: graphql`query logoutQuery { currentProfile { nodeId } }`,
  private: true,
  exact: true
}
export default LOGOUT_ROUTE
