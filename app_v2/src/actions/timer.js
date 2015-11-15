/*@flow*/
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const TICK_TIMER = 'TICK_TIMER'

export function startTimer(seconds:number):Action {
  return {type:START_TIMER, payload:{seconds}}
}

export function stopTimer():Action {
  return {type:STOP_TIMER, payload:{}}
}

export function tickTimer(remaining:string):Action {
  return {type:TICK_TIMER, payload:{remaining}}
}
