const { controllers: { channels } } = require('../../db')

module.exports = (app) => {
	app.get('/api/channels', channels.all)
	app.post('/api/channels', channels.create)
}
