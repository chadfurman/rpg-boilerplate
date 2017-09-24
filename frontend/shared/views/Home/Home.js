import React from 'react'
import {createFragmentContainer} from 'react-relay'
import {graphql} from 'relay-runtime'
import createReactClass from 'create-react-class'
'use strict'
import React from 'react'
import { HOME_ROUTE_PATH } from '../../routes/home'

import AppPrivate from '../../templates/AppPublic/AppPrivate'
import './Home.scss'

const Home = createReactClass({
  render () {
    return (
      <AppPrivate>
        <div>You are logged in, {this.props.currentProfile.displayName}</div>
      </AppPrivate>
    )
  }
})

export default createFragmentContainer(Home,
graphql`
fragment Home_currentProfile on Profile {
    displayName
}
`)
