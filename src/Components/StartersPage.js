import React, { useState } from 'react';
import { Modal, Button, Row, Col, Card } from 'antd';

const { Meta } = Card;

export const StartersPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const openModal = (recipe) => {
    setCurrentRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const recipes = [
    { 
      name: 'Guacamole', 
      image: 'https://via.placeholder.com/200x200/FFD700', 
      ingredients: [
        '3 ripe avocados',
        '1 lime, juiced',
        '1 teaspoon salt',
        '1/2 cup onion, diced',
        '3 tablespoons fresh cilantro, chopped',
        '2 ripe tomatoes, diced',
        '1 teaspoon minced garlic',
        '1 pinch ground cayenne pepper (optional)'
      ], 
      instructions: [
        'Peel and mash avocados in a medium serving bowl.',
        'Stir in lime juice and salt.',
        'Mix in onion, cilantro, tomatoes, and garlic.',
        'Add cayenne pepper if desired.',
        'Refrigerate for 1 hour before serving.'
      ] 
    },
    { 
      name: 'Chicken Wings', 
      image: 'https://via.placeholder.com/200x200/FFD700', 
      ingredients: [
        '2 lbs chicken wings',
        '1/4 cup soy sauce',
        '1/4 cup honey',
        '2 tablespoons vegetable oil',
        '2 cloves garlic, minced',
        '1 teaspoon ginger, minced',
        '1 tablespoon sesame seeds (optional)',
        'Chopped green onions for garnish (optional)'
      ], 
      instructions: [
        'In a large bowl, mix together soy sauce, honey, vegetable oil, garlic, and ginger.',
        'Add chicken wings to the bowl and toss until evenly coated.',
        'Cover and refrigerate for at least 1 hour.',
        'Preheat grill to medium heat and lightly oil the grate.',
        'Grill chicken wings for 15-20 minutes, turning occasionally, until juices run clear.',
        'Sprinkle with sesame seeds and green onions before serving.'
      ] 
    },
    { 
      name: 'Spinach Dip', 
      image: 'https://via.placeholder.com/200x200/9370DB', 
      ingredients: [
        '1 (10 oz) package frozen chopped spinach, thawed and drained',
        '1 (16 oz) container sour cream',
        '1 cup mayonnaise',
        '1 (8 oz) can water chestnuts, drained and chopped',
        '1/2 cup chopped green onions',
        '1 (1.8 oz) package dry vegetable soup mix',
        '1/2 teaspoon ground black pepper'
      ], 
      instructions: [
        'In a large bowl, mix together spinach, sour cream, mayonnaise, water chestnuts, green onions, soup mix, and black pepper until well combined.',
        'Cover and refrigerate for at least 2 hours before serving.',
        'Stir well before serving.'
      ] 
    },
    { 
      name: 'Stuffed Mushrooms', 
      image: 'https://via.placeholder.com/200x200/90EE90', 
      ingredients: [
        '24 large mushrooms, stems removed and reserved',
        '1/2 cup Italian seasoned bread crumbs',
        '1/4 cup grated Parmesan cheese',
        '2 cloves garlic, minced',
        '2 tablespoons chopped fresh parsley',
        '1/4 cup melted butter',
        'Salt and pepper to taste'
      ], 
      instructions: [
        'Preheat oven to 375°F (190°C). Grease a baking sheet.',
        'Chop mushroom stems finely.',
        'In a medium bowl, mix together chopped mushroom stems, bread crumbs, Parmesan cheese, garlic, parsley, melted butter, salt, and pepper.',
        'Stuff each mushroom cap with the mixture and place on prepared baking sheet.',
        'Bake in preheated oven for 15-20 minutes, until mushrooms are tender and stuffing is golden brown.'
      ] 
    },
    { 
      name: 'Bruschetta', 
      image: 'https://via.placeholder.com/200x200/4682B4', 
      ingredients: [
        '6 ripe tomatoes, diced',
        '1/4 cup fresh basil leaves, chopped',
        '2 cloves garlic, minced',
        '1 tablespoon balsamic vinegar',
        '1 tablespoon olive oil',
        'Salt and pepper to taste',
        '1 French baguette, sliced',
        '1/4 cup grated Parmesan cheese'
      ], 
      instructions: [
        'In a medium bowl, mix together diced tomatoes, basil, garlic, balsamic vinegar, olive oil, salt, and pepper. Cover and refrigerate for at least 30 minutes to allow flavors to meld.',
        'Preheat oven broiler. Arrange baguette slices in a single layer on a baking sheet.',
        'Broil baguette slices for 1-2 minutes per side, until lightly toasted.',
        'Top each toasted baguette slice with tomato mixture and sprinkle with Parmesan cheese.',
        'Serve immediately.'
      ] 
    }
  ];

  return (
    <div>
      <h1>Starters</h1>
      <Row gutter={[16, 16]}>
        {recipes.map((recipe, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: '100%', cursor: 'pointer' }}
              cover={<img alt={recipe.name} src={recipe.image} />}
              onClick={() => openModal(recipe)}
            >
              <Meta title={recipe.name} />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={`Recipe: ${currentRecipe ? currentRecipe.name : ''}`}
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {currentRecipe && (
          <div>
            <p>Ingredients:</p>
            <ul>
              {currentRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Instructions:</p>
            <ol>
              {currentRecipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default StartersPage;
