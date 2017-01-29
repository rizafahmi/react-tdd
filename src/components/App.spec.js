import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { App } from './components/App.js'

import { InputArea } from './components/InputArea.js'
import { CulinaryList } from './components/CulinaryList.js'

describe('<App />', () => {
  it('should render InputArea and CulinaryList', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <CulinaryList />
    ])).to.be.true
  })
})
