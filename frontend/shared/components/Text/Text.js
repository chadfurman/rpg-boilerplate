import React from 'react'
import createReactClass from 'create-react-class'
import classnames from 'classnames'
import { withTheme } from 'material-ui/styles'

const Text = createReactClass({
  render () {
    const style = {
      color: this.props.theme.palette.text.primary
    }

    return (
      <div style={style} className={classnames('text', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
})

export default withTheme(Text)
