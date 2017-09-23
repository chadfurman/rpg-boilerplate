/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Login from '../Login'

describe('A </Login>', function () {
  it('should be selectable by class "login"', function () {
    expect(shallow(<Login />).is('.login')).toBe(true)
  })

  it('renders correctly', () => {
    expect(toJson(shallow(<Login />))).toMatchSnapshot()
  })

  it('renders correctly with input set', () => {
    const login = shallow(<Login />)
    login.find('#email').simulate('change', {target: {value: 'test@email.com'}})
    login.find('#password').simulate('change', {target: {value: 'test pass'}})

    expect(toJson(login)).toMatchSnapshot()
  })
})
