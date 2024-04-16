import React, { useState } from 'react';
import { Button, Input, message, Select } from 'antd';
const { Option } = Select

export const AddRecipesPage = () => {
  const [passcode, setPasscode] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');

  const handleAddRecipe = () => {
    // Validate passcode
    if (passcode !== 'Bellefontaine') { // Replace 'your_passcode' with your actual passcode
      message.error('Invalid passcode. Please try again.');
      return;
    }

    // Validate input fields
    if (!recipeName || !ingredients || !instructions || !category) {
      message.error('Please fill in all fields.');
      return;
    }

    // Submit recipe to backend (backend implementation needed)
    // You can use fetch or axios to send a POST request to your backend endpoint
    const newRecipe = {
      recipeName,
      ingredients,
      instructions,
      category
    };
    // Example POST request to backend
    fetch('/api/addRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
    .then(response => {
      if (response.ok) {
        message.success('Recipe added successfully!');
        // Clear input fields after successful submission
        setRecipeName('');
        setIngredients('');
        setInstructions('');
        setCategory('');
      } else {
        message.error('Failed to add recipe. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error adding recipe:', error);
      message.error('Failed to add recipe. Please try again later.');
    });
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <Input
        placeholder="Enter passcode"
        value={passcode}
        onChange={e => setPasscode(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Input
        placeholder="Recipe Name"
        value={recipeName}
        onChange={e => setRecipeName(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Input.TextArea
        placeholder="Ingredients"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Input.TextArea
        placeholder="Instructions"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
       <Select
        placeholder="Select category"
        value={category}
        onChange={value => setCategory(value)}
        style={{ marginBottom: '16px', width: '100%' }}
      >
        <Option value="Desserts">Desserts</Option>
        <Option value="Starters">Starters</Option>
        <Option value='Entrees'>Entrees</Option>
      </Select>

      <Button type="primary" onClick={handleAddRecipe}>Add Recipe</Button>
      <p>Note: Recipes added here will be reviewed before being published.</p>
    </div>
  );
};


