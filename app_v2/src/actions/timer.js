/*@flow*/
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const TICK_TIMER = 'TICK_TIMER'

export function startTimer(minutes:number, type:PomodoroType):Action {
  const startedAt = new Date
  return {
    type:START_TIMER,
    payload:{minutes, type, startedAt}
  }
}

export function stopTimer():Action {
  return {type:STOP_TIMER, payload:{}}
}

export function tickTimer(remaining:string):Action {
  return {type:TICK_TIMER, payload:{remaining}}
}
