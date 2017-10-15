const express = require('express')
const bodyParser = require('body-parser')

module.exports = function createServer (port) {
  const server = express()
  server.use(bodyParser())

  return server
}