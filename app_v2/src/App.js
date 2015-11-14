'use strict'
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import Sub from './Sub'

class App extends Component {
  render () {
    const {timer, actions} = this.props
    return  <div>
              <pre>{timer}</pre>
              <Sub timer={timer} actions={actions}/>
            </div>
  }
}

function mapStateToProps(state){
  return {
    timer: state.timer
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
)(App)
