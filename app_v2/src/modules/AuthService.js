import axios from 'axios'

export default {
  authenticate
}

function authenticate(){
  return axios.get('https://pomodoro.dev/auth/info')
}
