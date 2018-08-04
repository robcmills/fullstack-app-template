const { controllers: { users } } = require('../../db')

module.exports = (app) => {
	app.post('/api/authenticate', users.authenticate)
	app.post('/api/login', users.login)
	app.delete('/api/logout', users.logout)
	app.get('/api/users', users.all)
	app.post('/api/register', users.register)
}
