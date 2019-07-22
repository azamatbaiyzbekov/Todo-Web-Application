const db = require('../models');
const response = require('./response');

module.exports = {
  index: (req, res) => {
    db.User.find({}, (error, foundUsers) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, foundUsers);
  })
},
  create: (req, res) => {
    db.User.create(req.body, (error, createdUser) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, createdUser);
      console.log(createdUser);
    })
  },
}


//Get New User
const newUser = (req, res) => {
  res.render(accounts/signup);
};

//Post create New User
const createUser = (req, res) => {
  const errors = [];
}

if (!req.body.name) {
  errors.push({ field: 'name', message: 'Please enter your name' })
}

if (!req.body.email) {
  errors.push({ field: 'email', message: 'Please enter your email' })
}

if (!req.body.password) {
  errors.push({ field: 'password', message: 'Please enter your password' })
}

if (req.body.password !== req.body.password2) {
  errors.push({ field: 'password', message: 'Passwords must match' })
}

if (errors.length) {
  return res.render('accounts/signup', { errors })
}
