const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb+srv://admin1:admin1@cluster0.ins6iev.mongodb.net/task-widget')
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('DB connection error', err));

// Routes setup
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
