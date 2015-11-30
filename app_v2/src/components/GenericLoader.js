require('./GenericLoader.styl')
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader'

export default class GenericLoader extends Component {
  render () {
    const {loading} = this.props
    return  <Loader loaded={!loading} lines={10} length={5} width={2} radius={7}></Loader>
  }
}
GenericLoader.propTypes = {
  loading: PropTypes.bool.isRequired
}
export default connect(
  (state) => {
    return {
      loading: state.loading,
    }
  },
  (dispatch) => {return {}}
)(GenericLoader)
