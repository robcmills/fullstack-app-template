import socket from './socket'
import store from './redux/store'

socket.on('SEND_MESSAGE', message => {
	store.dispatch({ type: 'SEND_MESSAGE_REQUEST', payload: message })
})