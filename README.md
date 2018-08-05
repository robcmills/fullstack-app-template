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

### Users

Username: admin
Password: admin

### Notes

Create a new migration
```bash
NODE_ENV=development npx sequelize migration:create --name <name>
```

### Todo

[ ] In register component, if user is logged in, show a message that they must log out with a button to do so