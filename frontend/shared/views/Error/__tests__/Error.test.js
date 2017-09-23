/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Error from '../Error'

describe('A </Error>', function () {
  it('renders correctly', () => {
    expect(toJson(shallow(<Error />))).toMatchSnapshot()
  })
})
