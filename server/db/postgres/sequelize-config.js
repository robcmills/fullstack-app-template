module.exports = {
	development: {
		database: 'fullstack_app_dev',
		dialect: 'postgres',
		host: 'db',
		password: 'example',
		username: process.env.PGUSER || 'postgres'
	},
	test: {
		database: 'fullstack_app_test',
		dialect: 'postgres',
		host: '127.0.0.1',
		password: null,
		username: process.env.PGUSER || 'postgres'
	},
	production: {
		dialect: 'postgres',
		dialectOptions: { ssl: true },
		ssl: true,
		use_env_variable: 'DATABASE_URL'
	}
}
