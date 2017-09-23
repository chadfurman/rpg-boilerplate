/**
 * NoMatch.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
import React from 'react'
import {createFragmentContainer} from 'react-relay'
import {graphql} from 'relay-runtime'
import createReactClass from 'create-react-class'
import AppPrivate from '../../templates/AppPrivate/AppPrivate'
import Card from 'material-ui/Card'

const NotFound = createReactClass({
  render () {
    return (<div className='page-title'>Page Not Found</div>)
  }
})

export default createFragmentContainer(NotFound,
  graphql`
fragment NotFound_currentProfile on Profile {
  ...AppPrivate_currentProfile
}
`)
