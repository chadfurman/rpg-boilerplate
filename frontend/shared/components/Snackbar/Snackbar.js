'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import {default as MuiSnackbar} from 'material-ui/Snackbar'

const Snackbar = createReactClass({
  render () {
    console.log(this.props)
    return (
      <MuiSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!this.props.message}
        autoHideDuration={5e3}
        onRequestClose={this.props.handleRequestClose}
        message={<span id='message-id'>{this.props.message}</span>}
        action={
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className='snackbar-close'
            onClick={this.props.handleRequestClose}
          >
            <CloseIcon />
          </IconButton>
        } />
    )
  }
})

Snackbar.propTypes = {
  message: PropTypes.string.isRequired
}

export default Snackbar
