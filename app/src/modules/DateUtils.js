export default {
  today,
  before,
  after,
}

function before(date) {
  date = normalize(date)
  const dateClone = new Date(date.getTime())
  dateClone.setDate(dateClone.getDate() - 1)
  return dateFrom(dateClone)
}

function after(date) {
  date = normalize(date)
  const dateClone = new Date(date.getTime())
  dateClone.setDate(dateClone.getDate() + 1)
  return dateFrom(dateClone)
}

function today() {
  return dateFrom(new Date)
}


function dateFrom(date) {
  date = normalize(date)
  const dateClone = new Date(date.getTime())
  const year = dateClone.getFullYear()
  const month = pad(dateClone.getMonth()+1)
  const day = pad(dateClone.getDate())

  return year + '/' + month + '/' + day
}

function normalize(date){
  return ( typeof date === 'string' ) ? new Date(date) : date
}

function pad(number) {
  if( number < 10 ) {
    return `0${number}`
  }
  return number
}
