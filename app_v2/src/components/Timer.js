import React, {Component} from 'react'
export default class Timer extends Component {
  render () {
    const {timer} = this.props
    return  <div>
              <pre>{timer}</pre>
            </div>
  }
}
