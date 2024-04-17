import React, { useState } from 'react';
import { Modal, Button, Row, Col, Card, Input, } from 'antd';

const { Meta } = Card;

export const SecretRecipesPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handlePasscodeSubmit = () => {
    const correctPasscode = 'Bellefontaine'; 
    if (passcode === correctPasscode) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const openModal = (recipe) => {
    setCurrentRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRecipeSelect = (recipe) => {
    setCurrentRecipe(recipe);
    setModalVisible(true);
  };

  return (
    <div>
      {!authenticated && (
        <div>
          <h1>Where the fuck you think you're going without a password?</h1>
          <Input
            type="password"
            placeholder="Enter passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <Button onClick={handlePasscodeSubmit}>Submit</Button>
          {error && <p style={{ color: 'red' }}>Incorrect passcode. Please try again.</p>}
        </div>
      )}
      {authenticated && (
        <div>
          <h1>You are looking at recipes older than you, show some damn respect. </h1>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: '100%', cursor: 'pointer' }}
                cover={<img alt="Guacamole" src="https://via.placeholder.com/800x400/FFA500" />}
                onClick={() => handleRecipeSelect('Guacamole')}
              >
                <Meta title="Guacamole" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: '100%', cursor: 'pointer' }}
                cover={<img alt="Chicken Wings" src="https://via.placeholder.com/800x400/FFD700" />}
                onClick={() => handleRecipeSelect('Chicken Wings')}
              >
                <Meta title="Chicken Wings" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: '100%', cursor: 'pointer' }}
                cover={<img alt="Spinach Dip" src="https://via.placeholder.com/800x400/9370DB" />}
                onClick={() => handleRecipeSelect('Spinach Dip')}
              >
                <Meta title="Spinach Dip" />
              </Card>
            </Col>
          </Row>
          <Modal
            title={currentRecipe && `Recipe: ${currentRecipe}`}
            visible={modalVisible}
            onCancel={closeModal}
            footer={null}
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
          </Modal>
        </div>
      )}
    </div>
  );
};

export default SecretRecipesPage;
