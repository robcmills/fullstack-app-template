module.exports = (sequelize, DataTypes) => {
	const DirectMessage = sequelize.define('DirectMessage', {
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
	DirectMessage.associate = function (models) {
		DirectMessage.belongsTo(models.User, {
			foreignKey: 'recipientUserId',
			through: 'user_message_recipient',
			as: 'Recipient'
		})
		DirectMessage.belongsTo(models.User, {
			foreignKey: 'senderUserId',
			through: 'user_message_sender',
			as: 'Sender'
		})
	}

	return DirectMessage
}
