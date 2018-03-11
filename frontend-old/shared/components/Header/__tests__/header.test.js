/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Header from '../Header'

describe('A </Header>', function () {
  it('should be selectable by class "header"', function () {
    expect(shallow(<Header />).is('.header')).toBe(true)
  })

  it('renders correctly', () => {
    expect(toJson(shallow(<Header />))).toMatchSnapshot()
  })

  it('shows the title when fade in animation ends', () => {
    const header = shallow(<Header />)
    expect(header.state().titleShowing).toBe(false)
    header.find('.header-fade').props().onEnter()
    expect(header.state().titleShowing).toBe(true)
  })

  it('hides the title when fade out animation ends', () => {
    const header = shallow(<Header />)
    header.setState({ titleShowing: true })
    header.find('.header-fade').props().onExited()
    expect(header.state().titleShowing).toBe(false)
  })

  it('updated the state searchOpened to be true when mobile search view is opened', () => {
    const header = shallow(<Header />)
    expect(header.state().searchOpened).toBe(false)
    header.find('.header-mobile-search-bar').props().onSearchOpening()
    expect(header.state().searchOpened).toBe(true)
  })

  it('updated the state searchOpened to be false when mobile search view is closed', () => {
    const header = shallow(<Header />)
    header.setState({ searchOpened: true })
    header.find('.header-mobile-search-bar').props().onSearchClosing()
    expect(header.state().searchOpened).toBe(false)
  })
})
