const express = require('express')
const { connect } = require('./db')
const init = require('./init')
const { DB_TYPE, ENV } = require('./config/env')

const app = express()

connect()

init(app)

console.log('Starting Server . . .')
console.log(`Environment: ${ENV}`)
console.log(`Using DB TYPE: ${DB_TYPE}`)
console.log(`Listening on port: ${app.get('port')}`)

app.listen(app.get('port'))
