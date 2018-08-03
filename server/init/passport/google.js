const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const db = require('../../db')

module.exports = (passport) => {
	if (!db.passport || !db.passport.google || !typeof db.passport.google === 'function') {
		console.warn('Unsupported passport-google-oauth')
		return
	}

	passport.use(new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENTID,
		clientSecret: process.env.GOOGLE_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback',
		passReqToCallback: true
	}, db.passport.google))
}
