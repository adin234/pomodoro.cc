require('../assets/audio/ring.mp3')
require('../assets/audio/ring.ogg')
require('../assets/audio/tick.mp3')
require('../assets/audio/tick.ogg')

import Buzz from './Buzz'

export default {
  tickSoundEnabled: tickSoundEnabled,
  ringSoundEnabled: ringSoundEnabled,
  startTickingSound: startTickingSound,
  stopTickingSound: stopTickingSound,
  startRingingSound: startRingingSound,
  toggleTickSound: toggleTickSound,
  toggleRingSound: toggleRingSound,
}


var ringSound = new Buzz.sound('ring', {
  preload: true,
  loop: false,
  webAudioApi: true,
  formats: ['ogg','mp3']
})
var tickSound = new Buzz.sound('tick', {
  preload: true,
  loop: true,
  webAudioApi: true,
  formats: ['ogg','mp3']
})

window.tickSound = tickSound

function tickSoundEnabled(){
  return !tickSound.isMuted()
}

function ringSoundEnabled(){
  return !ringSound.isMuted()
}

function startTickingSound(){
  if( tickSound.isPaused() ) {
    tickSound.play()
  }
}

function stopTickingSound(){
  tickSound.stop()
}

function startRingingSound(){
  ringSound.play()
}

function toggleTickSound(){
  tickSound.toggleMute()
}

function toggleRingSound(){
  ringSound.toggleMute()
}
