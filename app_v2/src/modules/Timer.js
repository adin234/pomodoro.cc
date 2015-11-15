export default {
  start: start,
  stop: stop,
  getRemaining: getRemaining,
  isInProgress: isInProgress,
  on: on,
  off: off,
}

let startedAt = undefined
let seconds = undefined
let interval = undefined
const events = {
  tick: [],
  end: [],
  start: [],
}

function start(_seconds){
  if( !validateSeconds(_seconds) || isTicking() )
    return

  startedAt = Date.now()
  seconds = _seconds
  interval = setInterval(tick, 500)
  setTimeout(tick, 50)
  events.start.forEach(function(callback){
    callback(seconds)
  })
  return seconds
}

function stop(){
  if( startedAt ){
    events.end.forEach((cb) => {
      if( cb instanceof Function )
        cb(0)
    })
    startedAt = undefined
    seconds = undefined
    clearInterval(interval)
  }
  return 0
}

function getRemaining(){
  if( !startedAt )
    return 0
  var now = Date.now()
  return intValue(startedAt/1000) - intValue(now/1000) + seconds
}

function isInProgress(){
  return !!startedAt
}

function on(event, fn){
  if( events[event] !== undefined && fn instanceof Function ){
    events[event].push(fn)
  }
}

function off(event, fn){
  if( events[event] !== undefined && fn instanceof Function ){
    events[event].forEach((callback, index) => {
      if(fn === callback){
        delete events[event][index] // TODO: better delete
      }
    })
  }
}


function tick(){
  var remaining = getRemaining()
  events.tick.forEach((cb) => {
    if( cb instanceof Function )
      cb(remaining)
  })
  if( remaining <= 0 ){
    stop()
  }
}

function intValue(number){
  return parseInt(number, 10)
}

function validateSeconds(seconds){
  const parsedSeconds = parseInt(seconds, 10)
  return seconds === parsedSeconds && seconds >= 0 && seconds <= 25*60
}

function isTicking(){
  return !!startedAt
}
