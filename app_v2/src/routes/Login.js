require('./Login.styl')
import LoginLogout from '../components/LoginLogout'
import * as actions from '../actions'
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Login extends Component {
  render () {
    const {timer, todos, settings, user, pomodoro, actions} = this.props
    return  <div className="content">
              <LoginLogout user={user}/>
            </div>
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  pomodoro: PropTypes.object.isRequired,
  timer: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default connect(
  (state) => {
    return {
      todos: state.todos,
      settings: state.settings,
      pomodoro: state.pomodoro,
      timer: state.timer,
      user: state.user,
    }
  },
  (dispatch) => {return {actions:bindActionCreators(actions,dispatch)}}
)(Login)
