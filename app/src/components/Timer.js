require('./Timer.styl')
import React, {Component, PropTypes} from 'react'
const CUSTOM_TIMER_INPUT='CUSTOM_TIMER_INPUT'

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      settingCustom: false
    }
  }
  _onClick() {
    this.setState({settingCustom: true})
  }
  _onBlur() {
    this.setState({settingCustom: false})
  }
  render() {
    const {timer} = this.props
    const custom = <div>
                    <input id="timer-custom" ref={CUSTOM_TIMER_INPUT} onBlur={this._onBlur.bind(this)}/>
                   </div>
    return  <div className="timer" onClick={this._onClick.bind(this)}>
              {this.state.settingCustom ? custom : timer}
            </div>
  }
}
Timer.propTypes = {
  timer: PropTypes.string.isRequired
}
