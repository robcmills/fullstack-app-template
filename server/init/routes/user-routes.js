const { controllers: { users, userMessages } } = require('../../db')

module.exports = (app) => {
	app.post('/api/authenticate', users.authenticate)
	app.post('/api/login', users.login)
	app.delete('/api/logout', users.logout)
	app.post('/api/users/:user_id/message', userMessages.create)
	app.get('/api/users/:user_id/messages', userMessages.get)
	app.get('/api/users/:user_id', users.getById)
	app.get('/api/users', users.all)
	app.post('/api/register', users.register)
}
