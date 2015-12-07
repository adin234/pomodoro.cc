import axios from 'axios'

export default {
  authenticate
}

function authenticate(){
  const base = /localhost/.test(window.location.host) ? 'https://pomodoro.dev' : ''
  console.log( '-- authorizing @ ', base )
  return axios.get(`${base}/auth/info`)
}
