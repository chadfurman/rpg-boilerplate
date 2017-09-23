'use strict'

import fetch from 'isomorphic-fetch'
import {
  Environment,
  Network,
  RecordSource,
  Store,
  fetchQuery,
  commitMutation,
  commitLocalUpdate,
  RecordSourceInspector
} from 'relay-runtime'

let __RELAY_DATA_SOURCE__ = {}
if (process.env.APP_ENV === 'BROWSER') {
  __RELAY_DATA_SOURCE__ = (typeof window === 'object' && window.__RELAY_DATA_SOURCE__) || {}
}

const manager = new ApiManager()
export function ApiManager () {
  const self = this
  self.api = null

  self.setToken = function setToken (token) {
    console.log('Api Manager Set Token Called with value: ' , token)
    let baseUrl
    if (process.env.APP_ENV === 'BROWSER') {
      if (window.location.hostname === 'localhost') {
        baseUrl = 'https://localhost:3001'
      }
      if (window.location.hostname === 'evercast-dev.cleverbuild.biz') {
        baseUrl = 'https://evercast-dev.cleverbuild.biz/api'
      }
      if (window.location.hostname === 'evercast-stage.cleverbuild.biz') {
        baseUrl = 'https://evercast-stage.cleverbuild.biz/api'
      }
      if (window.location.hostname === 'evercast.live') {
        baseUrl = 'https://evercast.live/api'
      }
    } else {
      baseUrl = process.env.API_URL
    }

    let options = { baseUrl, preloadedStore: __RELAY_DATA_SOURCE__ }

    self.noauthApi = createApi(options)
    // self.noauthApi = {} // networking disabled until db fixed

    if (typeof token !== 'undefined' && token !== 'undefined' && token !== null) {
      console.log('Setting token in api manager: ', token)
      options.headers = {
        'Authorization': `Bearer ${token}`
      }
    }

    self.api = createApi(options)
    // self.api = {} // networking disabled until db fixed
  }

  self.getInspector = function getInspector() {
    return self.api.getInspector()
  }

  self.getStore = function getStore() {
    return self.api.getStore()
  }

  self.getSource = function getSource() {
    return self.api.getSource()
  }

  self.getApi = function getApi () {
    return self.api
  }
  self.getNoauthApi = function getApi () {
    return self.noauthApi
  }

}

export function getDefaults (options) {
  if (!options) return
  return {
    mode: options.baseUrl ? 'cors' : 'same-origin',
    credentials: options.baseUrl ? 'include' : 'same-origin',
    method: 'POST',
    headers: {
      ...options.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
}

export function getEnvironment (apiConfig) {
  console.log('api manager getEnvironment called with config: ', apiConfig)
  if (!apiConfig) return
  return new Environment({
    handlerProvider: null,
    network: Network.create(
      (operation, variables /* cacheConfig, uploadables */) => {
        return fetch(`${apiConfig.baseUrl}/graphql`, {
          ...apiConfig.defaults,
          body: JSON.stringify({
            query: operation.text, // GraphQL text from input
            variables
          })
        }).then(response => {
          let err = false

          if (!response) {
            err = true
          } else if (response.status === 401) {
            err = 'Unauthorized'
          } else if (response.errors && response.errors.length > 0) {
            err = response.errors.join(',')
          }

          if (err) {
            manager.setToken(null)
          }

          return response.json()
        }).catch(err => {
          console.error('apiManager error: ', err)
        })
      }
    ),
    store: apiConfig.store
  })
}

export function createApi ({ baseUrl, headers = {}, preloadedStore = null }) {
  // Default options for the Fetch API
  // https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
  const source = new RecordSource(preloadedStore)
  const store = new Store(source)
  let apiConfig = {baseUrl, headers, store}

  // get default config for this API
  apiConfig.defaults = getDefaults(apiConfig)

  // Configure Relay environment
  let environment = getEnvironment(apiConfig)

  return {
    environment,
    fetch: (url, options) => fetch(`${url}`, {
      ...apiConfig.defaults,
      ...options,
      headers: {
        ...apiConfig.defaults.headers,
        ...(options && options.headers),
      },
    }),
    fetchQuery: fetchQuery.bind(undefined, environment),
    commitMutation: commitMutation.bind(undefined, environment),
    commitLocalUpdate: commitLocalUpdate.bind(undefined, environment),
    getInspector: () => new RecordSourceInspector(source),
    getStore: () => store,
    getSource: () => source,
  }
}

let token = null
if (process.env.APP_ENV === 'BROWSER') {
  token = document && document.cookie ? getCookie('jwt') : token
}

// taken from w3schools (:
export function getCookie (cname) {
  const name = cname + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return null
}

manager.setToken(token)
export const getApi = manager.getApi
export const getNoauthApi = manager.getNoauthApi
export const setToken = manager.setToken
export const getInspector = manager.getInspector
export const getStore = manager.getStore
export const getSource = manager.gegetSourc
