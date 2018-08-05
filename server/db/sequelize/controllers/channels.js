const { Models: { Channel } } = require('../models')

module.exports.all = (req, res) => {
	Channel.findAll().then((channels) => {
		res.json(channels)
	}).catch((err) => {
		console.log(err)
		res.status(500).send('Error in Channel.findAll')
	})
}

module.exports.create = (req, res, next) => {
	Channel.findOne({ where: { name: req.body.name } }).then((existingChannel) => {
		if (existingChannel) {
			return res.status(409).send('A Channel with the provided name already exists')
		}

		const channel = Channel.build({
			name: req.body.name
		})

		return channel.save().then(() => {
			return res.status(200).json(channel)
		})
	}).catch(err =>
		next(err)
	)
}
