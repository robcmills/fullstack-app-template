module.exports = (io) => {
	io.on('connection', (socket) => {
		socket.on('ENTER_CHANNEL', ({ channelId }) => {
			socket.join(channelId)
		})
		socket.on('EXIT_CHANNEL', ({ channelId }) => {
			socket.leave(channelId)
		})
		socket.on('SEND_MESSAGE', (message) => {
			socket.broadcast.to(message.channelId).emit('SEND_MESSAGE', message)
		})
	})
}
