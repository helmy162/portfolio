import './home.css';
import img from '../props/img2.jpg';
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

      

      <h2>
        <span>About Me</span> <br />
        <span>Graphic Designer</span> <br />
        <p>
        ❖ Graphic Designer with 3+ years of professional experience in Logo Designing and Brand Identity. <br></br>
        ❖ Tech stack: Adobe Photoshop, Adobe Illustrator, Adobe InDesign. <br></br>
        ❖ Have Experience in Photography and Photo Editing using Adobe Lightroom. 
        </p>
        <br></br>
        <br></br>
        <span>Frontend Developer:</span> <br />
        <p>
        
        ❖ Frontend Developer with 1+ years of experience in Web Designing and User Interface Development. <br></br>
        ❖ Tech stack: HTML(5), CSS(3), Bootstrap, JavaScript, jQuery, Reactjs. <br></br>
        ❖ Experts in responsive Web Design and analyzing and fixing UI bugs quickly. <br></br>
        ❖ Proficiency in code optimization to improve performance. <br></br>
        ❖ Have the potential to learn different languages and acquire more skills. <br></br>
        </p>
      </h2>

      <a href='#contact' className='scroll-down'>
        <hr />
        <h5>Contact Me</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <Buttons />
    </div>
  );
}

export default Home;
