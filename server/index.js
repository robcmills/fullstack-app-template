const express = require('express')
const { connect } = require('./db')
const init = require('./init')
const { DB_TYPE, ENV } = require('./config/env')
const { sequelize } = require('./db/sequelize/models')
const Socket = require('socket.io')
const initSocketEvents = require('./init/socket-events')

const app = express()

connect()

init(app)

sequelize.sync().then(() => {
	console.log('Starting Server...')
	console.log(`Environment: ${ENV}`)
	console.log(`Using DB TYPE: ${DB_TYPE}`)
	console.log(`Listening on port: ${app.get('port')}`)

	const server = app.listen(app.get('port'))
	const io = new Socket(server)
	initSocketEvents(io)
})
