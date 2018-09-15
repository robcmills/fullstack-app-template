const { controllers: { channelMessages } } = require('../../db')

module.exports = (app) => {
	app.get('/api/channels/:channel_id/messages', channelMessages.get)
	app.post('/api/channels/:channel_id/messages', channelMessages.create)
}
