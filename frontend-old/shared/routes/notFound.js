import NotFound from '../views/NotFound/NotFound'
export const NOT_FOUND_ROUTE_PATH = '/not-found'
export const NOT_FOUND_ROUTE = {
  path: NOT_FOUND_ROUTE_PATH,
  component: NotFound,
  private: true,
  exact: true
}
export default NOT_FOUND_ROUTE
