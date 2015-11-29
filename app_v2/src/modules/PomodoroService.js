import axios from 'axios'

const PomodoroService = {
  create: create
}

export default PomodoroService

function create(pomodoro){
  return axios.post('/api/pomodoro', pomodoro)
}
