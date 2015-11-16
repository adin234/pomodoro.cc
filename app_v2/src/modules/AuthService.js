var axios = require('axios')

export function authenticate(){
  return axios.get('/auth/info')
}
