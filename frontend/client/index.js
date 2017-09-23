'use strict'

import 'whatwg-fetch'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import createReactClass from 'create-react-class'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import R from 'ramda'

import App from '../shared/App'
import ThemeManager from '../shared/theme/themeManager'

injectTapEventPlugin()

const Main = createReactClass({
  // Remove server-side rendering CSS
  componentDidMount () {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  },

  render () {
    return <App {...this.props} />
  }
})

const AppContainer = createReactClass({
  getInitialState () {
    return {
      theme: ThemeManager.theme.getValue()
    }
  },

  componentWillMount () {
    ThemeManager.theme.subscribe(theme => this.handleThemeChange(theme))
  },

  componentWillUnmount () {
    ThemeManager.theme.dispose()
  },

  handleThemeChange (theme) {
    if (theme !== this.state.theme) {
      this.setState({theme})
    }
  },

  render () {
    return <BrowserRouter>
      <MuiThemeProvider theme={this.state.theme}>
        <Main />
      </MuiThemeProvider>
    </BrowserRouter>
  }
})

render(<AppContainer />, document.getElementById('app'))
