import React from "react";
import '../App.css';
import steak from '../foodpics/ai-food-images/steak.jpg'
import spinachDip from '../foodpics/ai-food-images/spinachDip.jpg'
import jambalaya from '../foodpics/ai-food-images/jambalaya.jpg'
import smoothie from '../foodpics/ai-food-images/smoothie.jpg'

import { Carousel, Image, Row,Col } from 'antd';
import './components.css'

const contentStyle = {
  height: '300px', 
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center', 
  background: 'white',
};

export const HomePage = () => {
  return (
    <Row justify="center" align="top" style={{ height: '100vh' }}>
  {/* Row for the greeting */}
  <Row gutter={[8, 16]}>
    <Col span={24}>
      <h1 className='bigGreeting'>Welcome to the Bellefontaine Family Cookbook</h1>
    </Col>
  </Row>
  {/* Row for the top carousel */}
  <Row justify="space-evenly" >
    <Col span={8}>
        <Carousel autoplay speed={350} scrollx >
            <Image
              src={spinachDip}
            />
            <Image
              src={steak}
            />
            <Image
              src={jambalaya}
            />
            <Image
              src={smoothie}
            />
        </Carousel>
    </Col>
    <Col span={16} className='webdescript-container'>
      <h2 className='webdescript'>Welcome to the Bellefontaine Family Cookbook, a digital haven dedicated to preserving the rich culinary heritage of South Louisiana. Immerse yourself in the vibrant flavors, cultural traditions, and heartfelt stories that have been cherished and passed down through generations of the Bellefontaine family, native to Jeanerette, Louisiana.</h2>
      <p className='webdescript'>
        Immerse yourself in the vibrant flavors, cultural traditions, and heartfelt stories that have been cherished and passed down through generations of the Bellefontaine family, native to Jeanerette, Louisiana.
      </p>
      <p className='webdescript'>
        Our recipes are more than just culinary creations; they are a celebration of our roots, our community, and the love that binds us together.
      </p>
      <p className='webdescript'>
        From gumbo simmering on the stove to freshly baked beignets dusted with powdered sugar, each dish tells a tale of tradition, resilience, and the spirit of Louisiana.
      </p>
      <p className='webdescript'>
        For centuries, these recipes have been lovingly shared and cherished within our family, passed down from one generation to the next like treasured heirlooms.
      </p>
      <p className='webdescript'>
        And as we continue to add new flavors and creations to our repertoire, we are committed to preserving the authenticity and integrity of our culinary legacy.
      </p>
    </Col>
    
  </Row>
  {/* Row for the web description */}
  
</Row>
  )
}

