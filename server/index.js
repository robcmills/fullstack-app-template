const express = require('express')
const app = express()

app.post('/api/register', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
