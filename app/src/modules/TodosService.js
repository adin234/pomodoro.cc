import axios from 'axios'
import DateUtils from './DateUtils'
const RESOURCE_URL = '/api/todos'

export default {
  create,
  all,
  get,
  update,
  today,
  daily,
}

function create(todo){
  return axios.post(RESOURCE_URL, todo)
}
function all(){
  return axios.get(RESOURCE_URL)
}
function get(todoId){
  return axios.get(`${RESOURCE_URL}/${todoId}`)
}
function update(todoId, todo){
  return axios.put(`${RESOURCE_URL}/${todoId}`, todo)
}
function today(){
  const todayDate = DateUtils.today()
  return daily(todayDate)
}
function daily(day, page = 1, acc = []){
  return axios.get(`${RESOURCE_URL}?day=${day}&completed=true&page=${page}`)
  .then((response) => {
    const data = response.data || []
    if( page < response.headers['x-pages'] ) {
      return daily(day, page + 1, acc.concat(data))
    }
    response.data = acc.concat(data)
    return response
  })
}
