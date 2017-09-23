'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
import Snackbar from '../../components/Snackbar/Snackbar'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'

import authenticate from '../../relay/mutations/authenticate'
import { SIGNUP_ROUTE_PATH } from '../../routes/signup'
import { RESET_PASSWORD_ROUTE_PATH } from '../../routes/resetPassword'

import './LoginForm.scss'

const LoginForm = createReactClass({
  getInitialState () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  handleEmailChange (event) {
    this.setState({email: event.target.value})
  },
  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  },
  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleLoginForm()
    }
  },
  handleRequestClose () {
    this.setState({error: ''})
  },
  handleLoginForm () {
    authenticate(this.state).then(authenticateResponse => {
      console.log('Authenticate response:', authenticateResponse)
      this.props.handleLoginSuccess()
    }).catch(authenticateFailure => {
      console.error(authenticateFailure)
      this.setState({error: authenticateFailure.message})
    })
  },
  render () {
    return (
      <div className='login-form'>
        <div className='page-title'>Log in</div>
        <div className='signup row row-centered'>Need an Evercast account?&nbsp;<Link to={SIGNUP_ROUTE_PATH}>Sign up now.</Link></div>
        <FormControl className='row'>
          <InputLabel htmlFor='input-label email'>
            Email Address
          </InputLabel>
          <Input id='email' value={this.state.email} tabIndex='1' onChange={this.handleEmailChange} onKeyPress={this.handleKeyPress} />
        </FormControl>
        <FormControl className='row'>
          <InputLabel htmlFor='password input-label'>
            Password
          </InputLabel>
          <Input type='password' id='password' tabIndex='2' value={this.state.password} autoComplete='off' onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress} />
        </FormControl>
        <div className='login-form-buttons'>
          <Button color='accent' raised className='row login-form-button' onClick={this.handleLoginForm}>LOG IN</Button>
          <div className='row row-centered row-thin hide'>OR</div>
          <Button color='primary' raised className='dark row login-form-button hide'>LOG IN WITH GOOGLE</Button>
        </div>
        <div className='forgot row row-centered invisible'><Link className='forgot-link' to={RESET_PASSWORD_ROUTE_PATH} >Forgot password?</Link></div>
        <Snackbar message={this.state.error} handleRequestClose={this.handleRequestClose} />
      </div>
    )
  }
})

LoginForm.propTypes = {
  handleLoginSuccess: PropTypes.func
}

export default LoginForm
