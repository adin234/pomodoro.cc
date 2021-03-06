require('dotenv').load()
const server = require('express')()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {PORT = 3000, HOST, UP_STAGE} = process.env
server.listen(PORT)
console.log(`listening @ https://${HOST} (${UP_STAGE})`)

require('./init/mongo')()
require('./passport.init')(server)
console.log('initialized auth')

server.use(morgan(':status\t :method\t :response-time ms\t :date[clf]\t :url\t\t'))
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(require('./routes'))
console.log('registered routes')

module.exports = server
