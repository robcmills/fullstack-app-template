const express = require('express')
const path = require('path')
const fs = require('fs')

const indexHtml = fs.readFileSync(
	path.join(__dirname, '../../client/build/index.html')
)

const getIndexHtml = ({ initialState }) => indexHtml
	.toString()
	.replace('"__INITIAL_STATE__"', JSON.stringify(initialState))
	.replace('__GOOGLE_SIGNIN_CLIENT_ID__', process.env.GOOGLE_SIGNIN_CLIENT_ID)

module.exports = (app) => {
	app.use('/static', express.static(
		path.join(__dirname, '../../client/build/static'), { index: false }))
	app.get('*', (req, res, next) => {
		const initialState = { isLoggingIn: !req.user, user: req.user }
		res.status(200).send(getIndexHtml({ initialState }))
	})
}
