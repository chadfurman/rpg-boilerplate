'use strict'
import NotFound from '../views/NotFound/NotFound'
export const RESET_PASSWORD_ROUTE_PATH = '/reset'
export const RESET_PASSWORD_ROUTE = {
  path: RESET_PASSWORD_ROUTE_PATH,
  component: NotFound,
  public: true,
  exact: true
}
export default RESET_PASSWORD_ROUTE
