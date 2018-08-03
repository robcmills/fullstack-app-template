const { Models } = require('../models')

const User = Models.User

module.exports = (id, done) => {
	User.findById(id).then((user) => {
		done(null, user)
	}).catch(done)
}
