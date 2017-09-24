import React from 'react'
import createReactClass from 'create-react-class'
import classnames from 'classnames'
import './AppPublic.scss'

const AppPublic = createReactClass({
  render () {
    return (
      <div className={classnames('app-public', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
})

export default AppPublic
