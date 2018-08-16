module.exports = (sequelize, DataTypes) => {
	const Message = sequelize.define('Message', {
		channelId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Channels',
				key: 'id'
			}
		},
		content: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
		userId: {
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
	Message.associate = function (models) {
		Message.belongsTo(models.Channel, {
			foreignKey: 'channelId',
			through: 'channel_message'
		})
		Message.belongsTo(models.User, {
			foreignKey: 'userId',
			through: 'message_sender'
		})
	}

	return Message
}
