import React from 'react'
import {createFragmentContainer} from 'react-relay'
import {graphql} from 'relay-runtime'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import classnames from 'classnames'
import { withTheme } from 'material-ui/styles'

import Header from '../../components/Header/Header'
import Drawer from '../../components/Drawer/Drawer'

import recentRoomsData from '../../../mocks/recentRoomsData.json'

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
    const bgStyle = {
      background: this.props.theme.status.background,
      backgroundSize: 'cover'
    }

    return (
      <div style={bgStyle} className={classnames('app-private', this.props.className)}>
        <Drawer
          open={this.state.drawerOpened}
          onDrawerClosed={() => this.setState({drawerOpened: false})}
          recentRooms={recentRoomsData} />
        <div className='app-private-main'>
          <Header className='app-private-header' currentProfile={this.props.currentProfile} onMenuClicked={this.toggleDrawer} />
          <div className='app-private-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})

export default withTheme(createFragmentContainer(AppPrivate,
  graphql`
  fragment AppPrivate_currentProfile on Profile {
    ...Header_currentProfile
  }`
))
