import React from 'react'
import {createFragmentContainer} from 'react-relay'
import {graphql} from 'relay-runtime'
import createReactClass from 'create-react-class'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { equals } from 'ramda'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Fade from 'material-ui/transitions/Fade'
import { duration } from 'material-ui/styles/transitions'
import classnames from 'classnames'

import './Header.scss'

const Header = createReactClass({
  render () {
    return (
      <div className={classnames('header', this.props.className)}>
        <AppBar position='fixed' className='header-app-bar' color='default'>
          <Toolbar className='header-toolbar'>
            <div className='header-container'>
              RPG Boilerplate
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
})

export default Header

