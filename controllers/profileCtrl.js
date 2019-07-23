const db = require('../models');

const showProfile = (req, res) => {
    // if (!req.session.currentUser) {
    //     return res.redirect('/accounts/login');
    // }
    
//     db.User.findById(req.session.currentUser._id, (err, foundUser) => {
//         if (err) return res.render('index', { errors: [{ message: 'Something went wrong'}]});
    
//         res.render('profile/show', { currentUser: foundUser })
    // });
    res.render('profile/show');
}

module.exports = {
    showProfile,
}

