const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.usersCtrl.index);
router.get('/current', ctrl.usersCtrl.show);
router.post('/', ctrl.usersCtrl.create);
router.put('/:id', ctrl.usersCtrl.update);
router.delete('/:id', ctrl.usersCtrl.delete);

module.exports = router;