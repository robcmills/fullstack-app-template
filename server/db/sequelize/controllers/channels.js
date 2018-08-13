const { Models: { Channel } } = require('../models')
const asyncHandler = require('./async-handler')

module.exports.all = asyncHandler(async (req, res) =>
	res.json(await Channel.findAll())
)

module.exports.create = asyncHandler(async (req, res) => {
	const existingChannel = await Channel.findOne({
		where: { name: req.body.name }
	})
	if (existingChannel) {
		return res.sendStatus(409)
	}

	const newChannel = await Channel.create({
		name: req.body.name
	})

	// Assume current user wants to join the channel they create
	await newChannel.addUser(req.user)

	return res.status(200).json(newChannel)
})
