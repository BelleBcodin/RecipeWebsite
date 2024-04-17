import React, { useState } from 'react';
import { Modal, Button, Row, Col, Card } from 'antd';

const { Meta } = Card;

export const EntreesPage = () => {
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
      name: 'Jambalaya', 
      image: 'https://via.placeholder.com/200x200/FFD700', 
      ingredients: ['rice','sausage', 'chicken thighs', 'bell peppers', 'onions', 'celery', 'chicken stock', 'browning liquid',
      ], 
      instructions: [
        'Thoroughly wash vegetables and meat with warm water, cut excess fat off chicken. Brown sausage in pot and then remove it.',
        'Season chicken with Tony\'s, then cook chicken in pot. Remove chicken when finished, add oil to pot.',
        'Dice vegetables and throw into pot. Sauté vegetables in pot on low-med heat for about 5-8 minutes or until soft.',
        'Add rice and chicken stock in a 1:2 ratio. Drop chicken and sausage in the pot, sprinkle seasoning, add two tablespoons of browning liquid, mix.',
        'Bring pot to a boil. Cover pot and switch heat to low. Cook for about 25 minutes stirring in between so rice on bottom does not burn.'
      ] 
    },
    { 
      name: 'Chicken with Mushroom Sauce', 
      image: 'https://via.placeholder.com/200x200/FFD700', 
      ingredients: [
        'chicken breast, white wine, mushrooms, cream, butter, flour, parmesan, garlic',
      ], 
      instructions: [
        'Take 2 big chicken breasts, cut in half horizontally. Pound chicken out to create a more flat surface area.',
        'Season the chicken with salt and pepper and then cover with flour. Put butter in pan and pan-fry the chicken until golden.',
        'Remove chicken when done, add more butter to pan and throw in mushrooms. Cook mushrooms and throw in garlic towards the end.',
        'Deglaze the pan with white wine, let pan simmer to cook out the alcohol. Add cream and parmesan. Return chicken to pan.'
      ] 
    },
    { 
      name: 'Chicken Alfredo', 
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
      name: 'Pot Roast with Carrots and Potatoes', 
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
      name: 'Reverse Seared Steak', 
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

export default EntreesPage;
