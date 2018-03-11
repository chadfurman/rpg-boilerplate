'use strict'

import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

// import fetch from 'node-fetch'
import { matchRoutes } from 'react-router-config'
import routes from '../shared/routes'
import HOME_ROUTE from '../shared/routes/home'

import RelayContextProvider from 'relay-context-provider'
import sourceMapSupport from 'source-map-support'
import React from 'react'
import { StaticRouter as Router } from 'react-router'
import render from './utils'
import App from '../shared/App'
import { getApi, setToken } from '../shared/relay/apiManager'

sourceMapSupport.install()
process.env.APP_ENV = 'SERVER'

const app = express()
app.use(cookieParser(process.env.COOKIE_SECRET)) // CHANGE THIS IN THE docker-compose.yml FILE
app.use(bodyParser.json())
app.use('/static', express.static('client/dist'))

app.get('/favicon.ico', function (req, res) {
  res.status(404).send()
})

app.post('/setJwt', function (req, res) {
  // XXX: This is a stop-gap solution and is not the correct way to do this!!!
  console.log('setJwt called, setting cookie to ', req.body)
  res.cookie('jwt', req.body.jwt)
  res.status(200).send()
})

app.get('*', (req, res) => {
  if (!process.env.BROWSER) {
    global.window = {navigator: {userAgent: req.headers['user-agent']}}
  }

  const renderAgent = (renderMe, env) => render(req.headers['user-agent'], renderMe, env)
  const renderRoute = (route, data, env) => renderAgent(
    <Router location={route} context={{}}>
      <App {...data} />
    </Router>, env
  )

  let route = matchRoutes(routes, req.url)

  if (route[0]) {
    route = route[0].route
  } else {
    route = HOME_ROUTE
  }

  if (req && req.cookies && req.cookies['jwt']) {
    const token = req.cookies['jwt']
    console.log('setting token from cookie: ', token)
    setToken(token)
  } else {
    console.log('setting null token')
    setToken(null)
  }

  let api = getApi()
  let env = api.environment

  if (route.query) {
    const variables = typeof route.reqParamsToVariables === 'function' ? route.reqParamsToVariables(req.params) : {}
    api.fetchQuery(route.query, variables).then(response => {
      res.status(200).send(renderRoute(req.url, response, env))
    }).catch(err => {
      console.error('errrr', err)
      res.cookie('jwt', '', {expires: new Date(0)})
      res.status(200).send(renderRoute(req.url, {}, env))
    })
  } else {
    renderRoute(200, req.url, {}, env)
  }
})

app.listen(3000, '0.0.0.0', () => console.log('SSR Server listening on port 3000'))
