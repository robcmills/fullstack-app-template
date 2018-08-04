# fullstack-app-template
Simple full stack app template for experimentation

### Setup

Create dev database
```bash
cd server/data
./sqlite3 fullstack-app-dev.sqlite3
NODE_ENV=development npx sequelize db:migrate
```

Start dev server
```
NODE_ENV=development npm start
```

