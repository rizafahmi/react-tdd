import React from 'react'

import { InputArea } from './InputArea.js'
import { CulinaryList } from './CulinaryList.js'

export class App extends React.Component {
  constructor () {
    super()
    this.state = {
      menus: []
    }
  }
  render () {
    return (
      <div>
        <InputArea />
        <CulinaryList />
      </div>
    )
  }
}
