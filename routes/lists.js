const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.listCtrl.indexOfLists);
router.post('/', ctrl.listCtrl.createList);
router.delete('/:id', ctrl.listCtrl.deleteList);

module.exports = router;



//post request with two input forms
//