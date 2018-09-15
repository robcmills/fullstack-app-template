module.exports = (io) => {
	io.on('connection', (socket) => {
		socket.on('ENTER_CHANNEL', ({ channelId }) => {
			socket.join(channelId)
		})
		socket.on('EXIT_CHANNEL', ({ channelId }) => {
			socket.leave(channelId)
		})
		socket.on('ENTER_USER_CHANNEL', ({ userId }) => {
			socket.join(userId)
		})
		socket.on('EXIT_USER_CHANNEL', ({ userId }) => {
			socket.leave(userId)
		})
		socket.on('SEND_MESSAGE', (message) => {
			socket.broadcast.to(message.channelId).emit('SEND_MESSAGE', message)
		})
		socket.on('SEND_USER_MESSAGE', (message) => {
			socket.broadcast.to(message.recipientUserId).emit('SEND_USER_MESSAGE', message)
		})
	})
}
