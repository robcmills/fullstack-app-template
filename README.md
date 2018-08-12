# fullstack-app-template
Simple full stack app template for experimentation

### Server Setup

Activate correct version of Node using Node Version Manager
```bash
server> nvm use 8.11.3
```

Install server dependencies
```bash
server> npm i
```

Create dev database
```bash
server> mkdir data && cd data
server/data> ./sqlite3 fullstack-app-dev.sqlite3
```

Apply migrations
```bash
server> NODE_ENV=development npx sequelize db:migrate
```

Start dev server
```bash
server> npm run dev
```

### Client Setup

Activate correct version of Node using Node Version Manager
```bash
client> nvm use 8.11.3
```

Install client dependencies
```bash
client> npm i
```

Start client
```bash
client> npm start
```

### TODO

*Client*

- [x] Set up client react app using create-react-app
- [x] Add redux for client state management
- [x] Add client side routing with react-router
- [x] Add material-ui library for a lot of free components and icons
- [x] Implement client login and register pages (with error handling)
- [x] Implement client side auth module for automatic login from previous sessions and redirects back to login page when sessions expire or user logs out
- [x] Implement client side drawer to display existing channels and users
- [x] Implement a create channel modal (with error handling)
- [ ] In register component, if user is logged in, show a message that they must log out with a button to do so (currently just redirects)
- [x] Improve client routing, especially the ability to determine the active channel id and share the selected channel document among several disparate components (maybe full redux integration)
- [x] Style the selected channel as highlighted in side drawer
- [ ] Fetch channel messages and display them in Messages component
- [ ] Filter users shown in sidebar drawer to only channel members
- [ ] Implement input to send messages to channel
- [ ] Implement top left menu icon click handler to show/hide the side drawer

*Server*

- [x] Set up basic express server
- [x] Set up passport authentication
- [x] Set up sequelize and configure to work with sqlite3 for local development
- [x] Set up session store for persistence of user authentication
- [x] Set up sequelize models for Users, Tokens, and Channels
- [x] Implement basic user routes for login, logout, authentication, and registration
- [x] Implement basic channel routes for creation and fetching
- [ ] Set up many-to-many associations between Channels and Users
- [ ] Expose routes to modify these associations (channel.addUser, channel.removeUser, etc.)
- [ ] Implement Messages model (with associations between Channels and Users)
- [ ] Implement Messages routes
- [ ] Ensure postgres/mysql compatibility for production deployments
- [ ] Implement generic route handler to enable using async/await
- [ ] Paginate

*Bonus*

- [ ] Incorporate socket.io and realtime updates
- [ ] Deploy to a live server
- [ ] Improve documentation
- [ ] Add tests
- [ ] Dockerize (wrap up both client and server into a docker and run both in parallel with a util like concurrently)
- [ ] User profile pages
- [ ] Google auth
