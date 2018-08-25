const { Models: { Message, User } } = require('../models')
const asyncHandler = require('./async-handler')

module.exports.get = asyncHandler(async (req, res) =>
	res.json(await Message.findAll({
		where: { channelId: req.params.channel_id },
		include: [{ model: User, attributes: ['username', 'id'] }]
	}))
)

module.exports.create = asyncHandler(async (req, res) => {
	const message = await Message.create({
		content: req.body.content
	})

	await message.setChannel(req.params.channel_id)
	await message.setUser(req.user.id)

	return res.status(200).json(message)
})
