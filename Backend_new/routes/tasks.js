const express = require('express');

const router = express.Router()
const tasks = require('./../controller/tasks')

router.route('/').get(tasks.getAllTasks).post(tasks.createTask);
router.route('/:id').get(tasks.getTask).patch(tasks.updateTask).delete(tasks.deleteTask);
       

module.exports = router;