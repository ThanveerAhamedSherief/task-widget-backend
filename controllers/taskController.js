const Task = require('../models/task');

// Get tasks for the logged-in user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Submit a new task
exports.submitTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = new Task({ userId: req.userId, title, description });
    await task.save();
    res.status(201).json({ message: 'Task submitted successfully', data:task });
  } catch (err) {
    res.status(400).json({ error: 'Error submitting task' });
  }
};


  
