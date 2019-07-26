const db = require('../models');
const response = require('./response');

// GET User Profile
const showProfile = (req, res) => {
  if (!req.session.currentUser) {
    return res.redirect('/accounts/login');
  }

  db.User.findById(req.session.currentUser._id, (error, foundUser) => {
    if (error) return res.render('index', { error: [{ message: 'Something went wrong, please try again' }] });

<<<<<<< HEAD
    res.render('/accounts/welcome', { currentUser: foundUser })
=======
    res.render('profile/show', { currentUser: foundUser })
>>>>>>> f80c928ec98a8cc0675d62f0597f0b1e4e048d83
    });
}


module.exports = {
  showProfile,
}
