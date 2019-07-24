const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.listCtrl.indexOfLists);
router.get('/:id', ctrl.listCtrl.showList);
router.post('/', ctrl.listCtrl.createList);
router.put('/:id', ctrl.listCtrl.updateList);

router.get('/', ctrl.taskCtrl.indexOfTasks);
router.get('/:id/tasks/:task_id', ctrl.taskCtrl.showTask);
router.post('/:id/tasks', ctrl.taskCtrl.createTask);
// router.put('/:id/tasks/:id/', ctrl.taskCtrl.updateTask);


module.exports = router;