/*@flow*/
export const START_TIMER = 'START_TIMER'
export const RESUME_TIMER = 'RESUME_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const TICK_TIMER = 'TICK_TIMER'

export function startTimer(minutes:number, type:PomodoroType):Action {
  const startedAt = new Date
  return {
    type:START_TIMER,
    payload:{minutes, type, startedAt}
  }
}

export function resumeTimer(pomodoro:Object):Action {
  let remaining = 0
  if(pomodoro && pomodoro.minutes && pomodoro.startedAt ){
    let elapsed = (Date.now() -  new Date(pomodoro.startedAt).getTime())
    elapsed = parseInt(elapsed/1000, 10)
    remaining = pomodoro.minutes*60 - elapsed
  }
  remaining = remaining << 0
  return {type:RESUME_TIMER, payload:{remaining}}
}

export function stopTimer():Action {
  return {type:STOP_TIMER, payload:{}}
}

export function tickTimer(remaining:string):Action {
  return {type:TICK_TIMER, payload:{remaining}}
}
