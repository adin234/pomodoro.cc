import React, {Component, PropTypes} from 'react'

export default class Timer extends Component {
  render () {
    const {timer} = this.props
    return  <div>
              <pre>{timer}</pre>
            </div>
  }
}
Timer.propTypes = {
  timer: PropTypes.string.isRequired
}
