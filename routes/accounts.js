const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.accountsCtrl.index);
// router.post('/signup', ctrl.accountsCtrl.createUser);

module.exports = router;