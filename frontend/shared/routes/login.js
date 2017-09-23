'use strict'
import { graphql } from 'relay-runtime'
import Login from '../views/Login/Login'
export const LOGIN_ROUTE_PATH = '/login'
export const LOGIN_ROUTE_QUERY = graphql`
query loginQuery {
  currentProfile {
    nodeId
    id
    displayName
    image
  }
}`
export const LOGIN_ROUTE = {
  path: LOGIN_ROUTE_PATH,
  component: Login,
  public: true,
  query: LOGIN_ROUTE_QUERY,
  exact: true
}

export default LOGIN_ROUTE
