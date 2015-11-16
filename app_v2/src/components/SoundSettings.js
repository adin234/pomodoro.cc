import React, {Component, PropTypes} from 'react'

export default class SoundSettings extends Component {
  render () {
    const {actions, settings} = this.props
    return  <div>
              <div>tick enabled: {settings.tickSoundEnabled ? 'true' : 'false'}</div>
              <div>ring enabled: {settings.ringSoundEnabled ? 'true' : 'false'}</div>
              <button onClick={()=>actions.toggleTickSound()}>tick</button>
              <button onClick={()=>actions.toggleRingSound()}>ring</button>
            </div>
  }
}
SoundSettings.propTypes = {
  actions: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
}
