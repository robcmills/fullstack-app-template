const { Models: { Channel } } = require('../models')

module.exports.all = (req, res) => {
	Channel.findAll().then((channels) => {
		res.json(channels)
	}).catch((err) => {
		console.log(err)
		res.status(500).send('Error in Channel.findAll')
	})
}
