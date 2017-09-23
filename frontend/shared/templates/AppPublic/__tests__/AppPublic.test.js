import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import AppPublic from '../AppPublic'

describe('An </AppPublic>', function () {
  it('should be selectable by class "base"', function () {
    expect(shallow(<AppPublic />).is('.base')).toBe(true)
  })

  it('renders correctly', () => {
    expect(toJson(shallow(<AppPublic />))).toMatchSnapshot()
  })

  it('renders correctly with drawer opened', () => {
    const base = shallow(<AppPublic />)
    base.setState({ drawerOpened: true })

    expect(toJson(base)).toMatchSnapshot()
  })

  it('should toggle the drawer state using toggleDrawer method', () => {
    const base = shallow(<AppPublic />)
    expect(base.state().drawerOpened).toBe(false)
    base.instance().toggleDrawer()
    expect(base.state().drawerOpened).toBe(true)
  })
})
