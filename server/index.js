const express = require('express')
const { connect } = require('./db')
const init = require('./init')

const app = express()

connect()

init(app)

app.post('/api/register', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
