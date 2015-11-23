import Notify from 'notifyjs'

export default {
  show,
  requestPermission
}

function show(title, options){
  return new Notify(title, {
    timeout: 3,
    ...options,
  }).show()
}
function requestPermission(...args){
  return Notify.requestPermission(...args)
}
