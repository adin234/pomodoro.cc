export default {
  track: registerEvent('track'),
  identify: registerEvent('identify'),
  page: registerEvent('page'),
}

function registerEvent(eventName){
  return () => {
    if( window.analytics && window.analytics[eventName] && window.analytics[eventName] instanceof Function ){
      window.analytics[eventName].apply(window.analytics, arguments)
    }
  }
}
