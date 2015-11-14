import React, {Component} from 'react'
export default class Sub extends Component {
  render () {
    const {dummy, actions} = this.props
    return  <div>
              <pre>{dummy}</pre>
              <pre onClick={() => actions.dummy()}>action</pre>
              <pre onClick={() => actions.dummyAsync()}>start timer</pre>
            </div>
  }
}
