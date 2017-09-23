import React from 'react'
import createReactClass from 'create-react-class'
import classnames from 'classnames'

import {createFragmentContainer} from 'react-relay'
import {graphql} from 'relay-runtime'
import MoreVert from 'material-ui-icons/MoreVert'
import IconButton from 'material-ui/IconButton'
import { withTheme } from 'material-ui/styles'

import './LiveRoomDrawer.scss'

const LiveRoomDrawer = createReactClass({
  getInitialState () {
    return {
      drawerOpened: false
    }
  },

  handleToggleClick () {
    this.setState({drawerOpened: !this.state.drawerOpened})
  },

  render () {
    const {theme} = this.props
    const drawerStyle = {
      backgroundColor: theme.palette.background.default
    }

    return (
      <div className={classnames('live-room-drawer', this.props.className)} style={drawerStyle}>
        <div className='live-room-drawer-handle'>
          <IconButton
            onClick={this.handleToggleClick}
            aria-label='Open live-room-drawer'
            className='live-room-drawer-open-icon'>
            <MoreVert />
          </IconButton>
        </div>
        <div className={classnames('live-room-drawer-content', this.state.drawerOpened ? 'expanded' : null)}>
          <div className='live-room-drawer-content-menu'>
          </div>
        </div>
      </div>
    )
  }
})

export default createFragmentContainer(withTheme(LiveRoomDrawer),
  graphql`
fragment LiveRoomDrawer_room on Liveroom {
  displayName
}
`)
