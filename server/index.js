const express = require('express')
const { connect } = require('./db')

const app = express()

connect()

app.post('/api/register', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
