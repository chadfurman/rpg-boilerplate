/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import AppPrivate, { AppPrivate as AppPrivateRaw } from '../AppPrivate'
import ThemeManager from '../../../Theme/ThemeManager'

function createBaseTemplate () {
  return shallow(<AppPrivate theme={ThemeManager.lightTheme} />).find(AppPrivateRaw).shallow()
}

describe('An </AppPrivate>', function () {
  it('should be selectable by class "app-private"', function () {
    expect(shallow(<AppBase />).is('.app-private')).toBe(true)
  })

  it('renders correctly', () => {
    expect(toJson(shallow(<AppBase />))).toMatchSnapshot()
  })

  it('renders correctly with drawer opened', () => {
    const base = createBaseTemplate()
    expect(base.is('.app-private')).toBe(true)
  })

  it('renders correctly', () => {
    expect(toJson(createBaseTemplate())).toMatchSnapshot()
  })

  it('renders correctly with drawer opened', () => {
    const base = createBaseTemplate()
    base.setState({ drawerOpened: true })

    expect(toJson(base)).toMatchSnapshot()
  })

  it('should toggle the drawer state using toggleDrawer method', () => {
    const base = createBaseTemplate()
    expect(base.state().drawerOpened).toBe(false)
    base.instance().toggleDrawer()
    expect(base.state().drawerOpened).toBe(true)
  })
})
