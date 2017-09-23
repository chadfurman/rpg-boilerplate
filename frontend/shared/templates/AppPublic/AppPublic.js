import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import classnames from 'classnames'
import { withTheme } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Card, { CardMedia } from 'material-ui/Card'
import Logo from '../../components/Logo/Logo'
import './AppPublic.scss'

const AppPublic = createReactClass({
  render () {
    const bgStyle = {
      background: this.props.theme.status.background,
      backgroundSize: 'cover'
    }

    return (
      <div style={bgStyle} className={classnames('app-public', this.props.className)}>
        <Card className='app-public-card'>
          <Logo className='app-public-logo' />
          <div className='app-public-content'>
            {this.props.children}
          </div>
        </Card>
        <div className='footer-links'>
          <a href='https://support.evercast.us' target='_blank' className='footer-link hide'>
            Help
          </a>
          <a href='https://support.evercast.us/contact' target='_blank' className='footer-link hide'>
            Contact
          </a>
        </div>
      </div>
    )
  }
})

AppPublic.propTypes = {
  noHeader: PropTypes.bool
}

export default withTheme(AppPublic)
