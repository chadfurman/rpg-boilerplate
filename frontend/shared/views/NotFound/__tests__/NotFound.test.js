/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import NotFound from '../NotFound'

describe('A </NotFound>', function () {
  it('renders correctly', () => {
    expect(toJson(shallow(<NotFound />))).toMatchSnapshot()
  })
})
