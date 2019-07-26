const db = require('../models');
const response = require('./response');

// GET User Profile
const showProfile = (req, res) => {
  if (!req.session.currentUser) {
    return res.redirect('/accounts/login');
  }

  db.User.findById(req.session.currentUser._id, (error, foundUser) => {
    if (error) return res.render('index', { error: [{ message: 'Something went wrong, please try again' }] });

    res.render('/accounts/welcome', { currentUser: foundUser })
    });
}


module.exports = {
  showProfile,
}
