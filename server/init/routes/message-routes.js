const { controllers: { messages } } = require('../../db')

module.exports = (app) => {
	app.get('/api/channels/:channel_id/messages', messages.get)
	app.post('/api/channels/:channel_id/messages', messages.create)
}
