'use strict'
import React, {Component} from 'react'
import Pomodoro from '../components/Pomodoro'
import TodoList from '../components/TodoList'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Index extends Component {
  render () {
    const {timer, todos, actions} = this.props
    return  <div>
              <Link to="foo">foo</Link>
              <Pomodoro timer={timer} actions={actions}/>
              <TodoList todos={todos} actions={actions}/>
            </div>
  }
}

function mapStateToProps(state){
  return {
    timer: state.timer,
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
