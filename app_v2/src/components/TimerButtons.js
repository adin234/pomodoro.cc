import React, {Component, PropTypes} from 'react'

export default class TimerButtons extends Component {
  render () {
    const {actions} = this.props
    return  <div>
              <pre onClick={() => actions.startTimer(25,'pomodoro')}>25min</pre>
              <pre onClick={() => actions.startTimer(5,'break')}>5min</pre>
              <pre onClick={() => actions.startTimer(15,'break')}>15min</pre>
              <pre onClick={() => actions.stopTimer()}>stopTimer</pre>
            </div>
  }
}
TimerButtons.propTypes = {
  actions: PropTypes.object.isRequired
}
