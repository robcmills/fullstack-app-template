const express = require('express')
const path = require('path')
const fs = require('fs')

const indexHtml = fs.readFileSync(
	path.join(__dirname, '../../client/build/index.html')
)

const getIndexHtml = ({ initialState }) => indexHtml
	.toString()
	.replace('"__INITIAL_STATE__"', JSON.stringify(initialState))

module.exports = (app) => {
	app.use(express.static(path.join(__dirname, '../../client/build'), { index: false }))
	app.get('*', (req, res) => {
		const initialState = { isLoggingIn: !req.user, user: req.user }
		res.status(200).send(getIndexHtml({ initialState }))
	})
}
