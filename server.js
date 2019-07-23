// SECTION : Modules
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
// const session = require('express-session');

// SECTION : Instanced Modules
const app = express();

// SECTION : Global Variable
const PORT = process.env.PORT || 4000;


// SECTION : Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// EJS
app.set('view engine', 'ejs');


// SECTION : Routes

// Root Route
app.use('/', routes.views);

// Accounts Route
app.use('/accounts', routes.accounts);

// Profile Route
// app.use('/profile', routes.profile);


// SECTION : API Endpoints
app.get('/accounts/users', (req, res) => {
  res.json([
    {
      name: 'test',
      email: 'test',
      password: 'test',
      user_id: 'test',
      sign_up_date: Date.now,
    }
  ])
})

app.get('/accounts', (req, res) =>{
  res.json({
    name: 'test',
    email: 'test',
    password: 'test',
    user_id: 'test',
    sign_up_date: Date.now,
  })
})


// SECTION : Server Listener 
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));