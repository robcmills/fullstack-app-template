#!/bin/bash

# If using Postgres, the node-connect-pg-simple module requires this
# first-time setup step to create the session table.
# https://github.com/voxpelli/node-connect-pg-simple#installation

docker run -it --rm \
	--net fullstack-app-template_default \
	--link fullstack-app-template_db_1:db \
	--volume "$(pwd)/server/node_modules/connect-pg-simple:/src" \
	postgres:10.5 \
	psql -h db -U postgres -d fullstack_app_dev -f /src/table.sql
