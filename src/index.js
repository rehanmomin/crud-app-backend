const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Update CORS to accept requests from your frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/api/users', userRoutes);

// Add a health check route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});