const { Models: { Message, User } } = require('../models')
const asyncHandler = require('./async-handler')

module.exports.get = asyncHandler(async (req, res) =>
	res.json(await Message.findAll({
		where: { channelId: req.params.channel_id },
		include: [{ model: User, attributes: ['username', 'id'] }],
		order: [['createdAt', 'DESC']]
	}))
)

module.exports.create = asyncHandler(async (req, res) => {
	console.log('req.body', req.body)
	console.log('req.user', req.user)
	const message = await Message.create({
		channelId: req.body.channelId,
		content: req.body.content,
		userId: req.body.userId
	})

	// await message.setChannel(req.params.channel_id)
	// await message.setUser(req.user.id)

	return res.status(200).json(message)
})
