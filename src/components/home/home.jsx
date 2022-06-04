import './home.css';
import img from '../props/img2.JPG';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import React from 'react';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo test1'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <div class="text-box">
          <div className='test3'>C</div>
          <div className='test3'>L</div>
          <div className='test3'>I</div>
          <div className='test3'>C</div>
          <div className='test3'>K</div>
          <div className='test3'>{'\u00A0'}</div>
          <br></br>
          <div className='test3'>M</div>
          <div className='test3'>E</div>
        </div>
        </div>
        

        <img src={img} alt='' />
      </div>

      <a href='#contact' className='scroll-down'>
        <hr />
        <h5>Contact Me</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
