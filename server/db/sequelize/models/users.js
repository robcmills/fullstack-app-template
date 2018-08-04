const Promise = require('bluebird')
const bcryptNode = require('bcrypt-nodejs')

const bcrypt = Promise.promisifyAll(bcryptNode)

function hashPassword (user) {
	if (!user.changed('password')) return null
	return bcrypt.genSaltAsync(5).then(salt =>
		bcrypt.hashAsync(user.password, salt, null).then((hash) => {
			user.password = hash
		})
	)
}

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		username: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
		gender: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
		location: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
		website: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
		picture: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
		resetPasswordToken: {
			type: DataTypes.STRING
		},
		resetPasswordExpires: {
			type: DataTypes.DATE
		},
		google: {
			type: DataTypes.STRING
		}
	}, {
		timestamps: false
	})

	// Class Methods
	User.associate = function (models) {
		User.hasMany(models.Token, {
			foreignKey: 'userId'
		})
	}

	// Instance Methods
	User.prototype.comparePassword = function (candidate) {
		return bcrypt.compareAsync(candidate, this.password)
	}
	User.prototype.toJSON = function () {
		return {
			id: this.id,
			username: this.username,
			email: this.email,
			profile: {
				name: this.name,
				gender: this.gender,
				location: this.location,
				website: this.website,
				picture: this.picture
			}
		}
	}

	User.beforeCreate(hashPassword)
	User.beforeUpdate(hashPassword)

	return User
}
