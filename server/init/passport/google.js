const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const db = require('../../db')
const env = require('../../config/env')

module.exports = passport => {
	passport.use(new GoogleStrategy({
		clientID: env.GOOGLE_CLIENT_ID,
		clientSecret: env.GOOGLE_SECRET,
		callbackURL: '/api/google/callback'
	}, db.passport.google))
}
