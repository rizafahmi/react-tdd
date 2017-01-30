import React from 'react'

import { InputArea } from './InputArea.js'
import { CulinaryList } from './CulinaryList.js'

export class App extends React.Component {
  constructor () {
    super()
    this.state = {
      menus: []
    }
    this.addItem = this.addItem.bind(this)
  }
  addItem (menu) {
    this.setState({
      menus: [...this.state.menus, menu]
    })
  }
  render () {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <CulinaryList />
      </div>
    )
  }
}
