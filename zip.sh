zip -rv ./app.zip . \
	-i \
	client/build/asset-manifest.json \
	client/build/manifest.json \
	client/build/service-worker.js \
	client/build/static/\* \
	client/build/favicon.ico \
	package.json \
	server/\*.js \
	server/package.json \
	server/data/ \
	-x \
	\*node_modules/\* \
	\*.DS_Store
