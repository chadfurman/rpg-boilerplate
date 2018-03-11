'use strict'
import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { HOME_ROUTE_PATH } from '../../routes/home'

import AppPublic from '../../templates/AppPublic/AppPublic'
import './Login.scss'

const Login = (props) => {
  return (
    <AppPublic noHeader>
      <LoginForm handleLoginSuccess={() => props.history.push(HOME_ROUTE_PATH)} />
    </AppPublic>
  )
}

export default Login
