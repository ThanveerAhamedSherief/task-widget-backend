const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const port = process.env.PORT || 5000
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGOURI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('DB connection error', err));

// Routes setup
app.get('/',(req, res) =>{
  res.status(200).send('Server is Up and Running');
})
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log('Server running on http://localhost:5000');
});
