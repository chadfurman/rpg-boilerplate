'use strict'

import React from 'react'
import createReactClass from 'create-react-class'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
import InputLabel from 'material-ui/Input/InputLabel'
import LinearProgress from 'material-ui/Progress/LinearProgress'
import FormControl from 'material-ui/Form/FormControl'
import FormHelperText from 'material-ui/Form/FormHelperText'
import Snackbar from '../../components/Snackbar/Snackbar'

import signup from '../../relay/mutations/signup'
import authenticate from '../../relay/mutations/authenticate'
import { HOME_ROUTE_PATH } from '../../routes/home'
import { SIGNUP_ROUTE_QUERY } from '../../routes/signup'
import { LOGIN_ROUTE_PATH } from '../../routes/login'
import { RESET_PASSWORD_ROUTE_PATH } from '../../routes/resetPassword'
import AppPublic from '../../templates/AppPublic/AppPublic'
import zxcvbn from 'zxcvbn'

import './Signup.scss'

const Signup = createReactClass({
  getInitialState () {
    return {
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      passwordStrength: 0,
      error: ''
    }
  },
  handleDisplayNameChange (event) {
    this.setState({displayName: event.target.value})
  },
  handleEmailChange (event) {
    this.setState({email: event.target.value})
  },
  handlePasswordConfirmChange (event) {
    this.setState({passwordConfirm: event.target.value})
  },
  handlePasswordChange (event) {
    this.setState({password: event.target.value})
    const {score: passwordStrength} = zxcvbn(this.state.password)
    this.setState({passwordStrength})
  },
  handleSignup () {
    if (!this.verifyForm()) {
      this.setState({error: 'Required data is either missing or invalid.  Please check the form and try again.'})
      return
    }

    signup(this.state).then(signupResponse => {
      return authenticate(this.state)
    }).then(authenticateResponse => {
      return this.props.history.push(HOME_ROUTE_PATH)
    }).catch((err) => {
      console.error(err)
      this.setState({error: err.message})
    })
  },
  passwordConfirmed () {
    const result = !!(this.state.passwordConfirm) && (this.state.passwordConfirm === this.state.password)
    return result
  },
  verifyForm () {
    return (
      this.state.displayName &&
      this.state.email &&
      (this.state.passwordStrength > 2) &&
      this.passwordConfirmed()
    )
  },
  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleSignup()
    }
  },
  render () {
    let passwordStrengthWord = 'Weak'
    passwordStrengthWord = this.state.passwordStrength > 0 ? 'Poor' : passwordStrengthWord
    passwordStrengthWord = this.state.passwordStrength > 1 ? 'Fair' : passwordStrengthWord
    passwordStrengthWord = this.state.passwordStrength > 2 ? 'Good' : passwordStrengthWord
    passwordStrengthWord = this.state.passwordStrength > 3 ? 'Strong' : passwordStrengthWord

    return (
      <AppPublic noHeader query={SIGNUP_ROUTE_QUERY}>
        <div className='signup'>
          <div className='page-title'>Sign up</div>
          <div className='signup row row-centered'>Already have an account?&nbsp;<Link to={LOGIN_ROUTE_PATH}>Log in.</Link></div>
          <FormControl required className='row'>
            <InputLabel htmlFor='signup-input-label display-name'>
              Display Name
            </InputLabel>
            <Input onKeyPress={this.handleKeyPress} id='display-name' value={this.state.displayName} tabIndex='1' onChange={this.handleDisplayNameChange} />
          </FormControl>
          <FormControl required className='row'>
            <InputLabel htmlFor='signup-input-label email'>
              Email Address
            </InputLabel>
            <Input onKeyPress={this.handleKeyPress} id='email' type='email' value={this.state.email} tabIndex='1' onChange={this.handleEmailChange} />
          </FormControl>
          <FormControl required className='row'>
            <InputLabel htmlFor='signup-input-label password'>
              Password
            </InputLabel>
            <Input onKeyPress={this.handleKeyPress} id='password' type='password' value={this.state.password} tabIndex='1' onChange={this.handlePasswordChange} />
          </FormControl>
          <FormControl required className='row' error={!this.passwordConfirmed()}>
            <InputLabel htmlFor='signup-input-label password-confirm'>
              Confirm Password
            </InputLabel>
            <Input onKeyPress={this.handleKeyPress} id='password-confirm' type='password' value={this.state.passwordConfirm} tabIndex='1' onChange={this.handlePasswordConfirmChange} />
            <FormHelperText className={`${this.passwordConfirmed() ? 'hide' : ''} error`}>
              Passwords do not match.
            </FormHelperText>
          </FormControl>
          <div className={`${passwordStrengthWord.toLowerCase()} password-strength row`}>
            <InputLabel htmlFor='signup-input-label password-strength' className='label'>
              Strong Password Required
            </InputLabel>
            <div className={`${this.state.password ? '' : 'hide'} content`}>
              <LinearProgress id='password-strength' mode='determinate' className='progress-bar' value={(this.state.passwordStrength / 4) * 100} />
              <span className='word'>{ passwordStrengthWord }</span>
            </div>
          </div>
          <div className='buttons-signup'>
            <Button color='accent' raised className='row signup-button' onClick={this.handleSignup}>SIGN UP</Button>
            <div className='row row-centered row-thin hide'>OR</div>
            <Button color='primary' raised className='dark row signup-button hide'>SIGN UP WITH GOOGLE</Button>
          </div>
          <div className='forgot row row-centered invisible'><Link className='forgot-link' to={RESET_PASSWORD_ROUTE_PATH} >Forgot password?</Link></div>
        </div>
        <Snackbar message={this.state.error} handleRequestClose={this.handleRequestClose} />
      </AppPublic>
    )
  }
})

export default Signup
