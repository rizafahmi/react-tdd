import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { App } from './App.js'

import { InputArea } from './InputArea.js'
import { CulinaryList } from './CulinaryList.js'

describe('<App />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should render InputArea and CulinaryList', () => {
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <CulinaryList />
    ])).to.be.true
  })

  it('should start with empty list', () => {
    expect(wrapper.state('menus')).to.have.lengthOf(0)
  })

  it('adds items to the list', () => {
    wrapper.instance().addItem('Sate Klatak')
    expect(wrapper.state('menus')).to.eql(['Sate Klatak'])
  })

  it('triggered addItem when InputArea submitted', () => {
    const inputArea = wrapper.find(InputArea)
    const addItem = wrapper.instance().addItem
    expect(inputArea.props('onSubmit')).to.eql({onSubmit: addItem})
  })
  it('save state into a new state', () => {
    const inputArea = wrapper.find(InputArea)
    inputArea.prop('onSubmit')('Sate Klatak')
    expect(wrapper.state('menus')).to.eql(['Sate Klatak'])
  })

})

describe('<InputArea />', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<InputArea />)
    })
  it('should contain an input and a button', () => {
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <button>Add</button>
    ])).to.equal(true)
  })

  it('should accept input', () => {
    const input = wrapper.find('input')
    input.simulate('change', {target: {
      value: 'Gado-gado'
    }})
    expect(wrapper.state('text')).to.equal('Gado-gado')
    expect(input.prop('value')).to.equal('Gado-gado')
  })
})
