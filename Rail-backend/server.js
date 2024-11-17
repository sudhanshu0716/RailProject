const express = require('express');
const cors = require('cors');  
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const lostAndFoundRoutes = require('./routes/LostAndFoundRoutes');

const app = express();

app.use(cors()); 
app.use(express.json()); 

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Users', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use('/api/users', userRoutes);

app.use('/api/lostandfound', lostAndFoundRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
