import React from 'react'
import createReactClass from 'create-react-class'
import Paper from 'material-ui/Paper'
import Text from '../../components/Text/Text'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import CreateRoom from '../../components/RoomSettingsDialog/CreateRoom'

import AppPrivate from '../../templates/AppPrivate/AppPrivate'

import './Empty.scss'

const Empty = createReactClass({
  getInitialState () {
    return {
      open: false
    }
  },

  handleRequestClose () {
    this.setState({open: false})
  },

  handleOpen () {
    this.setState({open: true})
  },

  renderEmptyView () {
    return <div className='empty-view'>
      <Paper className='empty-view-card' elevation={4}>
        <Text className='empty-view-card-title'>
          You currently don't have any rooms.
        </Text>
        <div className='empty-view-card-create-room-container'>
          <Button fab color='accent' onClick={this.handleOpen}>
            <AddIcon />
          </Button>
          <Text className='empty-view-card-create-room-container-action-text'>
            Create a room
          </Text>
        </div>
      </Paper>
    </div>
  },

  render () {
    return (
      <AppPrivate className='home'>
        <CreateRoom open={this.state.open} onRequestClose={this.handleRequestClose} />
        {this.renderEmptyView()}
      </AppPrivate>
    )
  }
})

export default Empty
