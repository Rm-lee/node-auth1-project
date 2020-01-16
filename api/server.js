const express = require('express')
const authRouter = require("./auth-router.js")
const configureMiddleware = require('./middleware-conf')

const server = express()
configureMiddleware(server)

server.use('/login', authRouter)

module.exports = server