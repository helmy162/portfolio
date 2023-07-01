import './home.css';
import img from '../props/img2.JPG';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import React from 'react';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo test1'>
        <div className='hover-show active'>
          <span className='circle'></span>  
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          {/* <div class="text-box">
            <div className='test3'>C</div>
            <div className='test3'>L</div>
            <div className='test3'>I</div>
            <div className='test3'>C</div>
            <div className='test3'>K</div>
            <div className='test3'>{'\u00A0'}</div>
            <br></br>
            <div className='test3'>M</div>
            <div className='test3'>E</div>
          </div> */}
        </div>
        <img src={img} alt='' />
      </div>

      

      <h2>
        <span>About Me</span> <br />
        
        <span>Frontend Developer:</span> <br />
        <p>
        
        Experienced software developer with proficiency in front-end web development and expertise in popular
        frameworks and tools such as Next.js and React. Skilled in project management with a track record of
        completing projects within budget and on time. Excited to contribute to creating value for end-users in larger
        projects and learn from experienced developers.
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
