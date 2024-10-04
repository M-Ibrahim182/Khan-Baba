import React from 'react';
import images from '../../constants/images.js'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Belive In</h1>

      <div className='app__chef-content'>
        <div className="quote-container">
          <span className="quote-mark">“</span>
          <p className="p__opensans">The only limit to our realization of tomorrow will be our doubts of today Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates itaque recusandae magni minus quidem facilis similique fuga reprehenderit est.</p>
        </div>
        <div className='app__chef-sign'>
        <p>Bhai kuch b</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
