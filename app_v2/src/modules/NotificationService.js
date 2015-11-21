import Notify from 'notifyjs'

export default {
  show,
  requestPermission
}

function show(title, options){
  return new Notify(title, options).show()
}
function requestPermission(){
  return Notify.requestPermission()
}
