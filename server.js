console.log('Project 1!');

// SECTION : Modules
const express = require('express');

// SECTION : Instanced Modules
const app = express();

// SECTION : Global Variable
const PORT = process.env.PORT || 4000;


// SECTION : Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SECTION : Routes


app.use(express.static(`${__dirname}/public`))

app.get('/status', (req,res) => {
  res.json({ status: 200, message: 'Okkkkk I see you'});
});

// Root Route
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});



// SECTION : Root Route via routes


// SECTION : API Endpoints



// SECTION : Server Listener 
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));