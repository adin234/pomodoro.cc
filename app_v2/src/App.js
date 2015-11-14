'use strict'
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import Sub from './Sub'

class App extends Component {
  render () {
    const {dummy, actions} = this.props
    return  <div>
              <pre>{dummy}</pre>
              <Sub dummy={dummy} actions={actions}/>
            </div>
  }
}

function mapStateToProps(state){
  return {
    dummy: state.dummy
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
