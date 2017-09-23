'use strict'
import { graphql } from 'relay-runtime'
import Home from '../views/Home/Home'
export const HOME_ROUTE_PATH = '/'
export const HOME_ROUTE_QUERY = graphql`
query homeQuery {
  currentProfile {
    ...Home_currentProfile
  }
}
`
export const HOME_ROUTE = {
  path: HOME_ROUTE_PATH,
  exact: true,
  component: Home,
  query: HOME_ROUTE_QUERY,
  private: true
}

export default HOME_ROUTE
