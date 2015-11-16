/*@flow*/
export const TOGGLE_TICK_SOUND = 'TOGGLE_TICK_SOUND'
export const TOGGLE_RING_SOUND = 'TOGGLE_RING_SOUND'

export function toggleTickSound():Action {
  return {type:TOGGLE_TICK_SOUND, payload:{}}
}

export function toggleRingSound():Action {
  return {type:TOGGLE_RING_SOUND, payload:{}}
}
