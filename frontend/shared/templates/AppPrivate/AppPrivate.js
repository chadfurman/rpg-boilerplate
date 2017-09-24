import React from 'react'
import createReactClass from 'create-react-class'
import classnames from 'classnames'

import './AppPrivate.scss'

const AppPrivate = createReactClass({
  getInitialState () {
    return {
      drawerOpened: false
    }
  },

  toggleDrawer () {
    this.setState({drawerOpened: !this.state.drawerOpened})
  },

  render () {
    return (
      <div className={classnames('app-private', this.props.className)}>
      <h1>PRIVATE HEADER GOES HERE</h1>
          {this.props.children}
      </div>
    )
  }
})

export default AppPrivate

