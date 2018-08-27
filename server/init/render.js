const express = require('express')
const path = require('path')
const manifest = require('../../client/build/asset-manifest.json')

const getIndexHtml = () => `
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<link rel="manifest" href="/manifest.json">
	<link rel="shortcut icon" href="/favicon.ico">
	<title>Fullstack App Template</title>
	<link href="/${manifest['main.css']}" rel="stylesheet">
</head>
<body>
	<div id="root"></div>
	<script type="text/javascript" src="/${manifest['main.js']}"></script>
</body>
</html>
`

module.exports = (app) => {
	app.use(express.static(path.join(__dirname, '../../client/build')))
	app.get('*', (req, res) => {
		res.status(200).send(getIndexHtml())
	})
}
