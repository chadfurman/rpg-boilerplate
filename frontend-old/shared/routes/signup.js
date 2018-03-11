'use strict'
import { graphql } from 'relay-runtime'
import Signup from '../views/Signup/Signup'

export const SIGNUP_ROUTE_PATH = '/signup'
export const SIGNUP_ROUTE_QUERY = graphql`
query signupQuery {
  currentProfile {
    nodeId
    id
    displayName
    image
  }
}`
export const SIGNUP_ROUTE = {
  path: SIGNUP_ROUTE_PATH,
  component: Signup,
  query: SIGNUP_ROUTE_QUERY,
  public: true,
  exact: true
}
export default SIGNUP_ROUTE
