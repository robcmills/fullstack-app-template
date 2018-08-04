const { controllers: { users } } = require('../../db')

module.exports = (app) => {
	app.post('/api/sessions', users.login)
	app.delete('/api/sessions', users.logout)
	app.get('/api/users', users.all)
	app.post('/api/users', users.register)
}
