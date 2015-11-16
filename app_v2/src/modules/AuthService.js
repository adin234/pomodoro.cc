var axios = require('axios')

const AuthService = {
  authenticate: authenticate
}

export default AuthService

function authenticate(){
  return axios.get('/auth/info')
}
