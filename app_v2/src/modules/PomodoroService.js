import axios from 'axios'

const ApiService = {
  create: create
}

export default ApiService

function create(pomodoro){
  return axios.post('/api/pomodoro', pomodoro)
}
