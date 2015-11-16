import React, {Component, PropTypes} from 'react'
import Timer from './Timer'
import TimerButtons from './TimerButtons'

export default class Pomodoro extends Component {
  render () {
    const {timer, actions} = this.props
    return  <div>
              <Timer timer={timer}/>
              <TimerButtons actions={actions}/>
            </div>
  }
}
Pomodoro.propTypes = {
  timer: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
}
