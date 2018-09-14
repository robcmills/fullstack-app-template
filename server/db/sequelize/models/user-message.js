module.exports = (sequelize, DataTypes) => {
	const UserMessage = sequelize.define('UserMessage', {
		content: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
		recipientUserId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Users',
				key: 'id'
			}
		},
		senderUserId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Users',
				key: 'id'
			}
		}
	}, {
		timestamps: true
	})

	// Class Methods
	UserMessage.associate = function (models) {
		UserMessage.belongsTo(models.User, {
			foreignKey: 'recipientUserId',
			through: 'user_message_recipient',
			as: 'Recipient'
		})
		UserMessage.belongsTo(models.User, {
			foreignKey: 'senderUserId',
			through: 'user_message_sender',
			as: 'Sender'
		})
	}

	return UserMessage
}
