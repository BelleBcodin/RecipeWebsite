import React from "react";
import '../App.css';
import steak from '../foodpics/steak.jpeg'
import pie from '../foodpics/pie.jpeg'
import download from '../foodpics/download.jpeg'
import smoothie from '../foodpics/smoothie.jpeg'
import { Carousel, Image } from 'antd';
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
    <div>
      <div>
        <h1 className='bigGreeting'>Welcome to the Bellefontaine Family Cookbook</h1>
      </div>

      <div className='top-carousel'>
        <Carousel autoplay speed={350} scrollx>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={download}
                style={{ width: '100%', height: '100%' }} 
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={steak}
                style={{ width: '25%', height: '50%' }} 
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={pie}
                style={{ width: '10%', height: '10%' }} 
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={smoothie}
                style={{ width: '100%', height: '100%' }} 
              />
            </h3>
          </div>
        </Carousel>
      </div>

      <div>
        <h2 className='webdescript'>This website is dedicated to displaying the tastes of South Louisiana through the recipes of the Bellefontaine Family.
        </h2>
      </div>
      <div className='bottom-carousel'>
        <Carousel autoplay speed={350} fade>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={download}
                style={{ width: '100%', height: '100%' }} 
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={steak}
                style={{ width: '25%', height: '25%' }} 
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={pie}
                style={{ width: '10%', height: '10%' }} 
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={smoothie}
                style={{ width: '100%', height: '100%' }} 
              />
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

