const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get tasks for the authenticated user
router.get('/', authMiddleware.authenticate, taskController.getTasks);

// Submit a new task
router.post('/submit', authMiddleware.authenticate, taskController.submitTask);

module.exports = router;
