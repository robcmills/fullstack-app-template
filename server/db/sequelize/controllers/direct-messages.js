const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { Models: { User, DirectMessage } } = require('../models')
const asyncHandler = require('./async-handler')

module.exports.create = asyncHandler(async (req, res) => {
	const message = await DirectMessage.create({
		content: req.body.content
	})

	await message.setRecipient(req.params.user_id)
	await message.setSender(req.user.id)

	return res.status(200).json(message)
})

module.exports.get = asyncHandler(async (req, res) =>
	res.json(await DirectMessage.findAll({
		where: {
			[Op.or]: [{
				recipientUserId: req.user.id,
				senderUserId: req.params.user_id
			}, {
				recipientUserId: req.params.user_id,
				senderUserId: req.user.id
			}]
		},
		include: [{
			model: User, as: 'Sender', attributes: ['id', 'name', 'picture', 'username']
		}, {
			model: User, as: 'Recipient', attributes: ['id', 'name', 'picture', 'username']
		}],
		order: [['createdAt', 'DESC']]
	}))
)
