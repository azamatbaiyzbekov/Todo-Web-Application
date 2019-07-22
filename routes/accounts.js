const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.accountsCtrl.index);
router.get('/:name', ctrl.accountsCtrl.show);
router.post('/', ctrl.accountsCtrl.create);
router.put('/:name', ctrl.accountsCtrl.update);
router.delete('/:id', ctrl.accountsCtrl.delete);

module.exports = router;