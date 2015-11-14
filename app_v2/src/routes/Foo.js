import React, {Component} from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Foo extends Component {
  render () {
    const {timer, actions} = this.props

    return  <div>
              <pre>{timer}</pre>
              <h1>About</h1>
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
)(Foo)
