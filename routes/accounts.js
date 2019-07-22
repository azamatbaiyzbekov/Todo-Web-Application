const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.accountsCtrl.index);
router.post('/', ctrl.accountsCtrl.create);

module.exports = router;