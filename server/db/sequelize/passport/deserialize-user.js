const { Models } = require('../models')

const User = Models.User

module.exports = (id, done) => {
	return User.findById(id).then((user) => {
		done(null, user)
	})
}
