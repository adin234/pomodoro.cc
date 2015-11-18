/*@flow*/
import Sounds from '../modules/Sounds'

export const TOGGLE_TICK_SOUND = 'TOGGLE_TICK_SOUND'
export const TOGGLE_RING_SOUND = 'TOGGLE_RING_SOUND'

export function toggleTickSound():Action {
  Sounds.toggleTickSound()
  return {type:TOGGLE_TICK_SOUND, payload:{}}
}

export function toggleRingSound():Action {
  Sounds.toggleRingSound()
  return {type:TOGGLE_RING_SOUND, payload:{}}
}
