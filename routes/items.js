const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.itemCtrl.indexOfItems);
router.post('/', ctrl.itemCtrl.createItems);

module.exports = router;