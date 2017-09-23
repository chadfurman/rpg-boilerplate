'use strict'

import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import createReactClass from 'create-react-class'
import routes from './routes'

import { HOME_ROUTE_PATH } from './routes/home'
import { LOGIN_ROUTE_PATH } from './routes/login'
import {QueryRenderer} from 'react-relay'
import {getApi} from './relay/apiManager'
import {graphql} from 'relay-runtime'

import './theme/global.scss'
import './theme/theme.scss'
import mainBg from './theme/main-bg.jpg'

function PrivateRoute ({component: Component, profile, query, queryParams, ...rest}) {
  return (
    <Route
      {...rest}
      render={(routeProps) => (profile)
        ? <QueryRenderer
          environment={getApi().environment}
          query={query}
          variables={routeProps.match.params}
          render={({error, props}) => {
            if (!props) return <div style={{background: `url(${mainBg}) center center / cover no-repeat fixed`, flex: 1}} />
            if (error) { console.error(error) }
            return (<Component {...props} {...routeProps} />)
          }} />
        : <Redirect to={{pathname: LOGIN_ROUTE_PATH, state: {from: routeProps.location}}} />}
    />
  )
}

function RegularRoute ({component: Component, profile, query, queryParams, ...rest}) {
  return (
    <Route
      {...rest}
      render={(routeProps) => (<QueryRenderer
        environment={getApi().environment}
        query={query}
        variables={routeProps.match.params}
        render={({error, props}) => {
          console.log(routeProps, props)
          if (!props) return <div style={{background: `url(${mainBg}) center center / cover no-repeat fixed`, flex: 1}} />
          if (error) { console.error(error) }
          return (<Component {...props} {...routeProps} />)
        }} />)
      } />
  )
}

function PublicRoute ({component: Component, profile, query, queryParams, ...rest}) {
  return (
    <Route
      {...rest}
      render={(routeProps) => (!profile)
        ? <QueryRenderer
          environment={getApi().environment}
          query={query}
          variables={routeProps.match.params}
          render={({error, props}) => {
            if (!props) return <div style={{background: `url(${mainBg}) center center / cover no-repeat fixed`, flex: 1}} />
            if (error) { console.error(error) }
            return (<Component {...props} {...routeProps} />)
          }} />
        : <Redirect to={HOME_ROUTE_PATH} />}
    />
  )
}

const App = createReactClass({
  renderBody (props) {
    return (
      <Switch>
        {routes.map((route, index) => {
          if (route.public) {
            return <PublicRoute {...route} profile={props && props.currentProfile} key={index} />
          } else if (route.private) {
            return <PrivateRoute {...route} profile={props && props.currentProfile} key={index} />
          } else {
            return <RegularRoute {...route} profile={props && props.currentProfile} key={index} />
          }
        })}
      </Switch>
    )
  },
  render () {
    console.log('rendering a page...')
    return (<QueryRenderer
      environment={getApi().environment}
      query={graphql`query AppQuery { currentProfile { nodeId } }`}
      variables={{}}
      render={({error, props}) => {
        if (error) { console.error(error) } else if (props) {
          return this.renderBody(props)
        } else {
          return <div style={{background: `url(${mainBg}) center center / cover no-repeat fixed`, flex: 1}} />
        }
      }} />)
  }
})

export default App
