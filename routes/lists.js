const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.listCtrl.indexOfLists);
router.post('/', ctrl.listCtrl.createList);

module.exports = router;