/*@flow*/
import {TOGGLE_TICK_SOUND, TOGGLE_RING_SOUND} from '../actions'

export const defaultState = {
  tickSoundEnabled: true,
  ringSoundEnabled: true,
}

export default function settings(state:SettingsState=defaultState, action:Action):SettingsState {
  switch(action.type) {
  case TOGGLE_TICK_SOUND : {
    return {
      ...state,
      tickSoundEnabled: !state.tickSoundEnabled
    }
  }
  case TOGGLE_RING_SOUND : {
    return {
      ...state,
      ringSoundEnabled: !state.ringSoundEnabled
    }
  }
  }
  return state
}
