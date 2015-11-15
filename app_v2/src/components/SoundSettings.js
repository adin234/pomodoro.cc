import React, {Component} from 'react'

export default class SoundSettings extends Component {
  render () {
    const {actions, settings} = this.props
    return  <div>
              <button onClick={()=>actions.toggleTickSound()}>tick</button>
              <button onClick={()=>actions.toggleRingSound()}>ring</button>
            </div>
  }
}
