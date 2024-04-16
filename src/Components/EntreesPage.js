import React, { useState } from 'react';
import { Tabs, Drawer, Button, Carousel } from 'antd';

const { TabPane } = Tabs;

export const EntreesPage = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const openDrawer = (recipe) => {
    setCurrentRecipe(recipe);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const recipes = [
    {
      name: 'Lightly Crusted Chicken Breast with Mushroom Sauce',
      ingredients: ['chicken breast, white wine, mushrooms, cream, butter, flour, parmesan, garlic'],
      instructions: [
        'Take 2 big chicken breasts, cut in half horizontally. Pound chicken out to create a more flat surface area.',
        'Season the chicken with salt and pepper and then cover with flour. Put butter in pan and pan-fry the chicken until golden.',
        'Remove chicken when done, add more butter to pan and throw in mushrooms. Cook mushrooms and throw in garlic towards the end.',
        'Deglaze the pan with white wine, let pan simmer to cook out the alcohol. Add cream and parmesan. Return chicken to pan.'
      ]
    },
    {
      name: 'Jambalaya',
      ingredients: ['rice', 'sausage', 'chicken thighs', 'bell peppers', 'onions', 'celery', 'chicken stock', 'browning liquid'],
      instructions: [
        'Thoroughly wash vegetables and meat with warm water, cut excess fat off chicken. Brown sausage in pot and then remove it.',
        'Season chicken with Tony\'s, then cook chicken in pot. Remove chicken when finished, add oil to pot.',
        'Dice vegetables and throw into pot. Sauté vegetables in pot on low-med heat for about 5-8 minutes or until soft.',
        'Add rice and chicken stock in a 1:2 ratio. Drop chicken and sausage in the pot, sprinkle seasoning, add two tablespoons of browning liquid, mix.',
        'Bring pot to a boil. Cover pot and switch heat to low. Cook for about 25 minutes stirring in between so rice on bottom does not burn.',
      ],
    },
    {
      name: 'Gumbo',
      ingredients: ['shrimp', 'sausage', 'chicken', 'bell peppers', 'onions', 'celery', 'tomatoes', 'spices', 'roux'],
      instructions: 'Prepare roux, sauté vegetables and meats, add roux and spices, simmer until thickened.',
    },
    {
      name: 'Corn and Crab Bisque',
      ingredients: ['corn', 'crab meat', 'heavy cream', 'vegetables', 'spices'],
      instructions: 'Sauté vegetables, add corn and crab meat, stir in cream and spices, simmer until flavors meld.',
    },
    {
      name: 'Chicken and Waffles',
      ingredients: ['chicken', 'waffles', 'syrup'],
      instructions: 'Fry chicken, toast waffles, serve together with syrup.',
    },
  ];

  return (
    <div>
      <div style={{ maxWidth: '200px', margin: '0 auto' }}>
        <Carousel autoplay style={{ maxWidth: '100%' }}>
          {recipes.map((recipe, index) => (
            <div key={index}>
              <img src={`https://via.placeholder.com/800x400/${index * 123 + 456}`} alt={recipe.name} style={{ width: '100%' }} />
            </div>
          ))}
        </Carousel>
      </div>

      <h1>Entrees</h1>
      <Tabs defaultActiveKey="1">
        {recipes.map((recipe, index) => (
          <TabPane tab={`Recipe ${index + 1}`} key={index + 1}>
            <div>
              <h3>{recipe.name}</h3>
              <Button onClick={() => openDrawer(recipe)}>View Recipe</Button>
            </div>
          </TabPane>
        ))}
      </Tabs>

      <Drawer
        title={`Recipe: ${currentRecipe ? currentRecipe.name : ''}`}
        placement="right"
        closable={true}
        onClose={closeDrawer}
        visible={drawerVisible}
        width={400}
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
              {Array.isArray(currentRecipe.instructions) ?
                currentRecipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                )) :
                <li>{currentRecipe.instructions}</li>
              }
            </ol>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default EntreesPage;


