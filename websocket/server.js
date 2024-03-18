const Websocket = require('ws')
const socket = new Websocket.Server({ port: 8011 })
socket.on('connection', (ws) => {
	console.log('someone in')
	ws.on('message', (message) => {
		console.log(message)
		setTimeout(() => {
			socket.clients.forEach(c => {
				c.send(message)
			})
		}, 1000)
	})
	ws.on('close', () => {
		console.log('someone out')
	})
})