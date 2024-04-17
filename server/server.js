const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipe-app')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
  console.log('MongoDB connection state:', mongoose.connection.readyState)

//   0: Disconnected
// 1: Connected
// 2: Connecting
// 3: Disconnecting

// Define routes
app.post('/api/addRecipe', async (req, res) => {
  try {
    // Check passcode (replace 'your_passcode' with your actual passcode)
    if (req.body.passcode !== 'Bellefontaine') {
      return res.status(401).json({ error: 'Invalid passcode' });
    }
 
    // Create new recipe
    const newRecipe = new Recipe({
      recipeName: req.body.recipeName,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    });

    // Save recipe to database
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe added successfully' });
  } catch (err) {
    console.error('Error adding recipe:', err);
    res.status(500).json({ error: 'Failed to add recipe' });
  }
});




// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
