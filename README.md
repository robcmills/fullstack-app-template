# fullstack-app-template
Simple full stack app template for experimentation

### Setup

Create dev database
```bash
server/data> ./sqlite3 fullstack-app-dev.sqlite3
```
Migrate db
```bash
server> NODE_ENV=development npx sequelize db:migrate
```

Start dev server
```bash
server> npm run dev
```

Start dev client
```bash
client> npm start
```
