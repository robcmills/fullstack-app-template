const express = require('express')
const { connect } = require('./db')
const init = require('./init')
const { DB_TYPE, ENV } = require('./config/env')
const { sequelize } = require('./db/sequelize/models')

const app = express()

connect()

init(app)

console.log('Starting Server . . .')
console.log(`Environment: ${ENV}`)
console.log(`Using DB TYPE: ${DB_TYPE}`)
console.log(`Listening on port: ${app.get('port')}`)

sequelize.sync().then(() => {
	app.listen(app.get('port'))
})
