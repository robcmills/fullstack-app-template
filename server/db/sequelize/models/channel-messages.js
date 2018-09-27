module.exports = (sequelize, DataTypes) => {
	const ChannelMessage = sequelize.define('ChannelMessage', {
		channelId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Channels',
				key: 'id'
			}
		},
		content: {
			type: DataTypes.TEXT,
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
	ChannelMessage.associate = function (models) {
		ChannelMessage.belongsTo(models.Channel, {
			foreignKey: 'channelId',
			through: 'channel_message'
		})
		ChannelMessage.belongsTo(models.User, {
			foreignKey: 'userId',
			through: 'message_sender'
		})
	}

	return ChannelMessage
}
