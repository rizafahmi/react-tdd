import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { App } from './App.js'

import { InputArea } from './InputArea.js'
import { CulinaryList } from './CulinaryList.js'

describe('<App />', () => {
  it('should render InputArea and CulinaryList', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <CulinaryList />
    ])).to.be.true
  })

  it('should start with empty list', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('menus')).to.have.lengthOf(0)
  })

  it('adds items to the list', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().addItem('Sate Klatak')
    expect(wrapper.state('menus')).to.eql(['Sate Klatak'])
  })
})
