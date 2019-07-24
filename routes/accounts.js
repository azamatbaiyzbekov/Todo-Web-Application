const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/signup', ctrl.accountsCtrl.newUser);
router.post('/signup', ctrl.accountsCtrl.createUser);
router.get('/login', ctrl.accountsCtrl.newSession);
router.get('/welcome', ctrl.accountsCtrl.welcome);


module.exports = router;