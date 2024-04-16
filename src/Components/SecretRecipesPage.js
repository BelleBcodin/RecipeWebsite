import React, { useState } from 'react';
import { Drawer, Button, Input, Carousel, Tabs } from 'antd';
const { TabPane } = Tabs;

export const SecretRecipesPage = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

 
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handlePasscodeSubmit = () => {
    const correctPasscode = 'Bellefontaine'; 
    if (passcode === correctPasscode) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleRecipeSelect = (recipe) => {
    setCurrentRecipe(recipe);
    setDrawerVisible(true);
  };

  return (
    <><div>
      <h1>Where the fuck you think you're going without a password?</h1>
    </div>
    <div>
        {!authenticated && (
          <div>
            <Input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)} />
            <Button onClick={handlePasscodeSubmit}>Submit</Button>
            {error && <p style={{ color: 'red' }}>Incorrect passcode. Please try again.</p>}
          </div>
        )}
        {authenticated && (
          <div>
            <Carousel autoplay style={{ maxWidth: '20%', margin: '5px auto' }}>
              <div>
                <img src="https://via.placeholder.com/800x400/FFA500" alt="Guacamole" style={{ width: '100%' }} />
              </div>
              <div>
                <img src="https://via.placeholder.com/800x400/FFD700" alt="Chicken Wings" style={{ width: '100%' }} />
              </div>
              <div>
                <img src="https://via.placeholder.com/800x400/9370DB" alt="Spinach Dip" style={{ width: '100%' }} />
              </div>
            </Carousel>

            <Tabs defaultActiveKey="1">
              <TabPane tab="Guacamole" key="1">
                <Button onClick={() => handleRecipeSelect('Guacamole')}>View Recipe</Button>
              </TabPane>
              <TabPane tab="Chicken Wings" key="2">
                <Button onClick={() => handleRecipeSelect('Chicken Wings')}>View Recipe</Button>
              </TabPane>
              <TabPane tab="Spinach Dip" key="3">
                <Button onClick={() => handleRecipeSelect('Spinach Dip')}>View Recipe</Button>
              </TabPane>
            </Tabs>

            <Drawer
              title={currentRecipe && `Recipe: ${currentRecipe}`}
              placement="right"
              closable={true}
              onClose={closeDrawer}
              visible={drawerVisible}
              width={400}
            >
              {currentRecipe === 'Guacamole' && (
                <div>
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    <li>3 ripe avocados</li>
                    <li>1 lime, juiced</li>
                    <li>1 teaspoon salt</li>
                    {/* Add more ingredients */}
                  </ul>
                  <p><strong>Instructions:</strong></p>
                  <ol>
                    <li>Peel and mash avocados in a medium serving bowl.</li>
                    <li>Stir in lime juice and salt.</li>
                    {/* Add more instructions */}
                  </ol>
                </div>
              )}
              {currentRecipe === 'Chicken Wings' && (
                <div>
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    <li>2 lbs chicken wings</li>
                    <li>1/4 cup soy sauce</li>
                    <li>1/4 cup honey</li>
                    {/* Add more ingredients */}
                  </ul>
                  <p><strong>Instructions:</strong></p>
                  <ol>
                    <li>In a large bowl, mix together soy sauce, honey, vegetable oil, garlic, and ginger.</li>
                    <li>Add chicken wings to the bowl and toss until evenly coated.</li>
                    {/* Add more instructions */}
                  </ol>
                </div>
              )}
              {currentRecipe === 'Spinach Dip' && (
                <div>
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    <li>1 (10 oz) package frozen chopped spinach, thawed and drained</li>
                    <li>1 (16 oz) container sour cream</li>
                    <li>1 cup mayonnaise</li>
                    {/* Add more ingredients */}
                  </ul>
                  <p><strong>Instructions:</strong></p>
                  <ol>
                    <li>In a large bowl, mix together spinach, sour cream, mayonnaise, water chestnuts, green onions, soup mix, and black pepper until well combined.</li>
                    <li>Cover and refrigerate for at least 2 hours before serving.</li>
                    {/* Add more instructions */}
                  </ol>
                </div>
              )}
            </Drawer>
          </div>
        )}
      </div></>
  );
};


