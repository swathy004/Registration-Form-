const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  // Remove the useNewUrlParser option
  // useNewUrlParser: true,
  // Remove the useUnifiedTopology option
  // useUnifiedTopology: true
  console.log('Connected to MongoDB at ' + url);
});

// Get the database URL

const url = 'mongodb://localhost:27017/mydatabase';
console.log('Connected to MongoDB at ' + url);




