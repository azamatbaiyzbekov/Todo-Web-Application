const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.listCtrl.indexOfLists);
router.post('/profile', ctrl.listCtrl.createList);

module.exports = router;



//post request with two input forms
//