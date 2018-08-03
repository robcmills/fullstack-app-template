const passport = require('passport')
const local = require('./local')
const google = require('./google')
const db = require('../../db')

module.exports = () => {
	if (db.passport && db.passport.deserializeUser) {
		passport.serializeUser((user, done) => {
			done(null, user.id)
		})
		passport.deserializeUser(db.passport.deserializeUser)
	} else {
		console.warn('Unsupported deserialize User')
	}

	local(passport)
	// google(passport)
}
