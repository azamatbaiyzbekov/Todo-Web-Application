console.log('Project 1!');

// SECTION : Modules
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

// SECTION : Instanced Modules
const app = express();

// SECTION : Global Variable
const PORT = process.env.PORT || 4000;


// SECTION : Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SECTION : Routes


app.use('/', routes.views);

// Accounts Route
app.use('/accounts', routes.accounts);

// SECTION : Root Route via routes


// SECTION : API Endpoints



// SECTION : Server Listener 
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));