'use strict'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { create } from 'jss'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import preset from 'jss-preset-default'

import { MuiThemeProvider } from 'material-ui/styles'
import createTheme from '../shared/theme/theme'
import serialize from 'serialize-javascript'

export default function render (userAgent, renderMe, env) {
  const sheetsRegistry = new SheetsRegistry()
  const theme = createTheme()
  const jss = create(preset())
  jss.options.createGenerateClassName = createGenerateClassName

  const html = renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new WeakMap()}>
        {renderMe}
      </MuiThemeProvider>
    </JssProvider>
  )
  const css = sheetsRegistry.toString()
  const relayDataSource = serialize(((env && typeof env.getStore === 'function') ? env.getStore().getSource() : {}), { isJSON: true })

  return renderFullPage(html, css, relayDataSource)
}

function renderFullPage (html, css, relayDataSource) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>RPG Boilerplate</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,800" rel="stylesheet">
        <style id="jss-server-side" type="text/css">${css}</style>
        <link href="/static/main.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="app">${html}</div>
        <script type="application/javascript">
           window.__RELAY_DATA_SOURCE__ = ${relayDataSource} // XXX: note that this is preliminary and does not actually prevent re-fecthing after page render
        </script>
        <script type="application/javascript" src="/static/client.js"></script>
    </body>
    </html>
    `
}
