'use strict'
import React, {Component} from 'react'
import Timer from '../components/Timer'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Index extends Component {
  render () {
    const {timer, actions} = this.props
    return  <div>
              <Timer timer={timer} actions={actions}/>
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
)(Index)
