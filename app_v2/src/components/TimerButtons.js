import React, {Component} from 'react'
export default class TimerButtons extends Component {
  render () {
    const {actions} = this.props
    return  <div>
              <pre onClick={() => actions.startTimer(25*60)}>25min</pre>
              <pre onClick={() => actions.startTimer(5*60)}>5min</pre>
              <pre onClick={() => actions.startTimer(15*60)}>15min</pre>
              <pre onClick={() => actions.stopTimer()}>stopTimer</pre>
            </div>
  }
}
