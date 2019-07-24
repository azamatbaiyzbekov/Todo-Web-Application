// SECTION : Modules
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const session = require('express-session');

// SECTION : Instanced Modules
const app = express();

// SECTION : Global Variable
const PORT = process.env.PORT || 4000;


// SECTION : Middleware

// Express Sesssion
app.use(session({
  secret: 'SHHHHH!',
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  console.log('REQ SESSION = ', req.session);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// EJS
app.set('view engine', 'ejs');

// SECTION : API Endpoints
// SECTION : Routes

// Root Route
app.use('/', routes.views);

// Accounts Route
app.use('/accounts', routes.accounts);

// Profile Route
app.use('/profile', routes.profile);

// Users Route
app.use('/api/users', routes.users);

// Users Lists
app.use('/lists', routes.lists);

// Users Tasks
// app.use('/tasks', routes.tasks);

// SECTION : Server Listener 
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));