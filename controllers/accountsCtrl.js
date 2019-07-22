const db = require('../models');

module.exports = {
  index: (req, res) => {
    db.User.find({}, (error, allUsers) => {
      if (error) return res.json({ status: 400, error: error});
    })
    res.json({ status: 200, data: allUsers });
  }
}