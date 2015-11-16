/*@flow*/
import {TOGGLE_TICK_SOUND, TOGGLE_RING_SOUND} from '../actions'
import Sounds from '../modules/Sounds'

export const defaultState = {
  tickSoundEnabled: true,
  ringSoundEnabled: true,
}

export default function settings(state:SettingsState=defaultState, action:Action):SettingsState {
  switch(action.type) {
  case TOGGLE_TICK_SOUND : {
    Sounds.toggleTickSound()
    return {
      ...state,
      tickSoundEnabled: !state.tickSoundEnabled
    }
  }
  case TOGGLE_RING_SOUND : {
    Sounds.toggleRingSound()
    return {
      ...state,
      ringSoundEnabled: !state.ringSoundEnabled
    }
  }
  }
  return state
}
