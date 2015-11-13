'use strict'
import React, {Component} from 'react'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.incrementCount.bind(this)}>Increment</button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}
