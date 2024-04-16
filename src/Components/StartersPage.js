import React, { useState } from 'react';
import { Tabs, Drawer, Button, Carousel } from 'antd';

const { TabPane } = Tabs;

export const StartersPage = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const openDrawer = (recipe) => {
    setCurrentRecipe(recipe);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <div style={{ maxWidth: '200px', margin: '0 auto' }}>
        <Carousel autoplay style={{ maxWidth: '100%' }}>
          <div>
            <img src="https://via.placeholder.com/800x400/FFA500" alt="Guacamole" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400/FFD700" alt="Chicken Wings" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400/9370DB" alt="Spinach Dip" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400/90EE90" alt="Stuffed Mushrooms" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400/4682B4" alt="Bruschetta" style={{ width: '100%' }} />
          </div>
        </Carousel>
      </div>

      <h1>Starters</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Recipe 1" key="1">
          <div>
            <h3>Recipe 1: Guacamole</h3>
            <Button onClick={() => openDrawer('Guacamole')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 2" key="2">
          <div>
            <h3>Recipe 2: Chicken Wings</h3>
            <Button onClick={() => openDrawer('Chicken Wings')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 3" key="3">
          <div>
            <h3>Recipe 3: Spinach Dip</h3>
            <Button onClick={() => openDrawer('Spinach Dip')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 4" key="4">
          <div>
            <h3>Recipe 4: Stuffed Mushrooms</h3>
            <Button onClick={() => openDrawer('Stuffed Mushrooms')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 5" key="5">
          <div>
            <h3>Recipe 5: Bruschetta</h3>
            <Button onClick={() => openDrawer('Bruschetta')}>View Recipe</Button>
          </div>
        </TabPane>
      </Tabs>

      <Drawer
        title={`Recipe: ${currentRecipe}`}
        placement="right"
        closable={true}
        onClose={closeDrawer}
        visible={drawerVisible}
        width={400}
      >
        {currentRecipe === 'Guacamole' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>3 ripe avocados</li>
              <li>1 lime, juiced</li>
              <li>1 teaspoon salt</li>
              <li>1/2 cup onion, diced</li>
              <li>3 tablespoons fresh cilantro, chopped</li>
              <li>2 ripe tomatoes, diced</li>
              <li>1 teaspoon minced garlic</li>
              <li>1 pinch ground cayenne pepper (optional)</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>Peel and mash avocados in a medium serving bowl.</li>
              <li>Stir in lime juice and salt.</li>
              <li>Mix in onion, cilantro, tomatoes, and garlic.</li>
              <li>Add cayenne pepper if desired.</li>
              <li>Refrigerate for 1 hour before serving.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Chicken Wings' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>2 lbs chicken wings</li>
              <li>1/4 cup soy sauce</li>
              <li>1/4 cup honey</li>
              <li>2 tablespoons vegetable oil</li>
              <li>2 cloves garlic, minced</li>
              <li>1 teaspoon ginger, minced</li>
              <li>1 tablespoon sesame seeds (optional)</li>
              <li>Chopped green onions for garnish (optional)</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>In a large bowl, mix together soy sauce, honey, vegetable oil, garlic, and ginger.</li>
              <li>Add chicken wings to the bowl and toss until evenly coated.</li>
              <li>Cover and refrigerate for at least 1 hour.</li>
              <li>Preheat grill to medium heat and lightly oil the grate.</li>
              <li>Grill chicken wings for 15-20 minutes, turning occasionally, until juices run clear.</li>
              <li>Sprinkle with sesame seeds and green onions before serving.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Spinach Dip' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>1 (10 oz) package frozen chopped spinach, thawed and drained</li>
              <li>1 (16 oz) container sour cream</li>
              <li>1 cup mayonnaise</li>
              <li>1 (8 oz) can water chestnuts, drained and chopped</li>
              <li>1/2 cup chopped green onions</li>
              <li>1 (1.8 oz) package dry vegetable soup mix</li>
              <li>1/2 teaspoon ground black pepper</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>In a large bowl, mix together spinach, sour cream, mayonnaise, water chestnuts, green onions, soup mix, and black pepper until well combined.</li>
              <li>Cover and refrigerate for at least 2 hours before serving.</li>
              <li>Stir well before serving.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Stuffed Mushrooms' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>24 large mushrooms, stems removed and reserved</li>
              <li>1/2 cup Italian seasoned bread crumbs</li>
              <li>1/4 cup grated Parmesan cheese</li>
              <li>2 cloves garlic, minced</li>
              <li>2 tablespoons chopped fresh parsley</li>
              <li>1/4 cup melted butter</li>
              <li>Salt and pepper to taste</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>Preheat oven to 375°F (190°C). Grease a baking sheet.</li>
              <li>Chop mushroom stems finely.</li>
              <li>In a medium bowl, mix together chopped mushroom stems, bread crumbs, Parmesan cheese, garlic, parsley, melted butter, salt, and pepper.</li>
              <li>Stuff each mushroom cap with the mixture and place on prepared baking sheet.</li>
              <li>Bake in preheated oven for 15-20 minutes, until mushrooms are tender and stuffing is golden brown.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Bruschetta' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>6 ripe tomatoes, diced</li>
              <li>1/4 cup fresh basil leaves, chopped</li>
              <li>2 cloves garlic, minced</li>
              <li>1 tablespoon balsamic vinegar</li>
              <li>1 tablespoon olive oil</li>
              <li>Salt and pepper to taste</li>
              <li>1 French baguette, sliced</li>
              <li>1/4 cup grated Parmesan cheese</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>In a medium bowl, mix together diced tomatoes, basil, garlic, balsamic vinegar, olive oil, salt, and pepper. Cover and refrigerate for at least 30 minutes to allow flavors to meld.</li>
              <li>Preheat oven broiler. Arrange baguette slices in a single layer on a baking sheet.</li>
              <li>Broil baguette slices for 1-2 minutes per side, until lightly toasted.</li>
              <li>Top each toasted baguette slice with tomato mixture and sprinkle with Parmesan cheese.</li>
              <li>Serve immediately.</li>
            </ol>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default StartersPage;
