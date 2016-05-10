export default {
  today,
  before,
}

function before(date) {
  date = ( typeof date === 'string' ) ? new Date(date) : date
  const dateClone = new Date(date.getTime())
  dateClone.setDate(dateClone.getDate() - 1)
  const year = dateClone.getFullYear()
  const month = pad(dateClone.getMonth()+1)
  const day = pad(dateClone.getDate())
  return year + '/' + month + '/' + day
}

function today() {
  const todayDate = new Date
  const year = todayDate.getFullYear()
  const month = pad(todayDate.getMonth()+1)
  const day = pad(todayDate.getDate())

  return year + '/' + month + '/' + day
}

function pad(number) {
  if( number < 10 ) {
    return `0${number}`
  }
  return number
}
