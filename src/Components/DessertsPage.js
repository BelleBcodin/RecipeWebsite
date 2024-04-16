import React, { useState } from 'react';
import { Tabs, Drawer, Button, Carousel } from 'antd';

const { TabPane } = Tabs;

export const DessertsPage = () => {
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
            <img src="https://via.placeholder.com/800x400/FFA500" alt="Chocolate Cake" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400/FFD700" alt="Tiramisu" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400/9370DB" alt="Fruit Salad" style={{ width: '100%' }} />
          </div>
          
        </Carousel>
      </div>

      <h1>Desserts</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Recipe 1" key="1">
          <div>
            <h3>Recipe 1: Chocolate Cake</h3>
            <Button onClick={() => openDrawer('Chocolate Cake')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 2" key="2">
          <div>
            <h3>Recipe 2: Tiramisu</h3>
            <Button onClick={() => openDrawer('Tiramisu')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 3" key="3">
          <div>
            <h3>Recipe 3: Fruit Salad</h3>
            <Button onClick={() => openDrawer('Fruit Salad')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 4" key="4">
          <div>
            <h3>Recipe 4: Bread Pudding</h3>
            <Button onClick={() => openDrawer('Bread Pudding')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 5" key="5">
          <div>
            <h3>Recipe 5: Pecan Pie</h3>
            <Button onClick={() => openDrawer('Pecan Pie')}>View Recipe</Button>
          </div>
        </TabPane>
        <TabPane tab="Recipe 6" key="6">
          <div>
            <h3>Recipe 6: Pralines</h3>
            <Button onClick={() => openDrawer('Pralines')}>View Recipe</Button>
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
        {currentRecipe === 'Chocolate Cake' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>1 3/4 cups all-purpose flour</li>
              <li>1 1/2 cups granulated sugar</li>
              <li>3/4 cup unsweetened cocoa powder</li>
              <li>1 1/2 teaspoons baking powder</li>
              <li>1 1/2 teaspoons baking soda</li>
              <li>1 teaspoon salt</li>
              <li>2 eggs</li>
              <li>1 cup milk</li>
              <li>1/2 cup vegetable oil</li>
              <li>2 teaspoons vanilla extract</li>
              <li>1 cup boiling water</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</li>
              <li>In a large bowl, combine flour, sugar, cocoa, baking powder, baking soda, and salt.</li>
              <li>Add eggs, milk, oil, and vanilla. Beat on medium speed for 2 minutes.</li>
              <li>Stir in boiling water (batter will be thin).</li>
              <li>Pour batter evenly into prepared pans.</li>
              <li>Bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.</li>
              <li>Cool in pans for 10 minutes, then remove from pans and cool completely on wire racks.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Tiramisu' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>1 cup heavy cream</li>
              <li>1 cup mascarpone cheese</li>
              <li>1/4 cup granulated sugar</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1 cup brewed espresso, cooled</li>
              <li>2 tablespoons coffee liqueur (optional)</li>
              <li>24 ladyfingers</li>
              <li>Unsweetened cocoa powder, for dusting</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>In a mixing bowl, beat heavy cream, mascarpone, sugar, and vanilla until stiff peaks form.</li>
              <li>In a shallow dish, combine cooled espresso and coffee liqueur.</li>
              <li>Quickly dip each ladyfinger into the espresso mixture and arrange in the bottom of a 9x9 inch dish.</li>
              <li>Spread half of the mascarpone mixture over the ladyfingers.</li>
              <li>Repeat layers with remaining ladyfingers and mascarpone mixture.</li>
              <li>Refrigerate for at least 2 hours, or overnight.</li>
              <li>Before serving, dust with cocoa powder.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Fruit Salad' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>2 cups strawberries, sliced</li>
              <li>1 cup blueberries</li>
              <li>1 cup grapes, halved</li>
              <li>1 cup pineapple chunks</li>
              <li>1 banana, sliced</li>
              <li>1/4 cup honey</li>
              <li>2 tablespoons lime juice</li>
              <li>1 tablespoon mint leaves, chopped</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>In a large bowl, combine strawberries, blueberries, grapes, pineapple, and banana.</li>
              <li>In a small bowl, whisk together honey, lime juice, and mint.</li>
              <li>Pour honey-lime mixture over the fruit and toss gently to coat.</li>
              <li>Chill in the refrigerator for at least 30 minutes before serving.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Bread Pudding' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>6 cups bread cubes</li>
              <li>2 cups milk</li>
              <li>3 eggs</li>
              <li>3/4 cup granulated sugar</li>
              <li>1/4 cup butter, melted</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1/2 teaspoon ground cinnamon</li>
              <li>1/4 teaspoon ground nutmeg</li>
              <li>1/2 cup raisins (optional)</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.</li>
              <li>In a large bowl, combine bread cubes and milk. Let stand for 5 minutes.</li>
              <li>In another bowl, beat eggs, sugar, melted butter, vanilla, cinnamon, and nutmeg until well combined.</li>
              <li>Stir egg mixture into bread mixture until combined. Fold in raisins if using.</li>
              <li>Pour into prepared baking dish.</li>
              <li>Bake for 45 to 50 minutes, or until set and golden brown.</li>
              <li>Allow to cool before serving.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Pecan Pie' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>1 unbaked pie crust</li>
              <li>1 cup light corn syrup</li>
              <li>1 cup granulated sugar</li>
              <li>3 eggs</li>
              <li>1/4 cup unsalted butter, melted</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1 1/2 cups pecan halves</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>Preheat oven to 350°F (175°C).</li>
              <li>In a large bowl, whisk together corn syrup, sugar, eggs, melted butter, and vanilla until well combined.</li>
              <li>Stir in pecan halves.</li>
              <li>Pour mixture into unbaked pie crust.</li>
              <li>Bake for 50 to 55 minutes, or until set and crust is golden brown.</li>
              <li>Allow to cool before serving.</li>
            </ol>
          </div>
        )}
        {currentRecipe === 'Pralines' && (
          <div>
            <p>Ingredients:</p>
            <ul>
              <li>1 cup granulated sugar</li>
              <li>1 cup packed brown sugar</li>
              <li>1/2 cup evaporated milk</li>
              <li>1/4 cup unsalted butter</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1 1/2 cups pecan halves</li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li>Line a baking sheet with parchment paper and set aside.</li>
              <li>In a medium saucepan, combine granulated sugar, brown sugar, evaporated milk, and butter.</li>
              <li>Cook over medium heat, stirring constantly, until mixture reaches 240°F (115°C) on a candy thermometer (soft-ball stage).</li>
              <li>Remove from heat and stir in vanilla extract and pecan halves.</li>
              <li>Drop spoonfuls of the mixture onto the prepared baking sheet.</li>
              <li>Let cool until set before serving.</li>
            </ol>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default DessertsPage;


