require('dotenv').load()
const server = require('express')()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

server.listen(process.env.HTTP_PORT || 3000)

require('./init/mongo')()
require('./passport.init')(server)

server.use(morgan(':status\t :method\t :response-time ms\t :date[clf]\t :url\t\t'))
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(require('./routes'))

module.exports = server
