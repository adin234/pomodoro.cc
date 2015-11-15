require('../assets/audio/ring.mp3')
require('../assets/audio/ring.ogg')
require('../assets/audio/tick.mp3')
require('../assets/audio/tick.ogg')

import Buzz from './Buzz'

export default {
  isMutedTickingSound: isMutedTickingSound,
  isMutedRingingSound: isMutedRingingSound,
  startTickingSound: startTickingSound,
  stopTickingSound: stopTickingSound,
  startRingingSound: startRingingSound,
  toggleMuteTickingSound: toggleMuteTickingSound,
  toggleMuteRingingSound: toggleMuteRingingSound,
}


var ringingSound = new Buzz.sound('ring', {
  preload: true,
  loop: false,
  webAudioApi: true,
  formats: ['ogg','mp3']
})
var tickingSound = new Buzz.sound('tick', {
  preload: true,
  loop: true,
  webAudioApi: true,
  formats: ['ogg','mp3']
})

function isMutedTickingSound(){
  return tickingSound.isMuted()
}

function isMutedRingingSound(){
  return ringingSound.isMuted()
}

function startTickingSound(){
  if( tickingSound.isPaused() ) {
    tickingSound.play()
  }
}

function stopTickingSound(){
  tickingSound.stop()
}

function startRingingSound(){
  ringingSound.play()
}

function toggleMuteTickingSound(){
  tickingSound.toggleMute()
}

function toggleMuteRingingSound(){
  ringingSound.toggleMute()
}
