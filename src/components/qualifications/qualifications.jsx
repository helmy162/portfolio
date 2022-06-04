import "./qualifications.css";
import { BsMouse } from 'react-icons/bs';
import React from 'react';



const Qualifications = () => {
  return (
    <div id="qualifications">
      <span className="quali-text">FRONT-END WEB</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html">  </div>
          <div class="skills__bar skills__html"> </div>
          <div>
            <br></br>
            <span class="skills__percentage">95%</span>
          </div>
          <div className="test"><i class='bx bxl-html5 skills__icon top'></i> <h1>html</h1> </div>
        </div>
        <div className="qualification">
          <div className="content css">  </div>
          <div class="skills__bar skills__css"> </div>
          <div>
            <br></br>
            <span class="skills__percentage">90%</span>
          </div>
          <div className="test"><i class='bx bxl-css3 skills__icon top'></i> <h1>css</h1> </div>
        </div>
        <div className="qualification">
          <div className="content javascript">  </div>
          <div class="skills__bar skills__javascript"> </div>
          <div>
            <br></br>
            <span class="skills__percentage">80%</span>
          </div>
          <div className="test"><i class='bx bxl-javascript skills__icon top'></i> <h1>javascript</h1> </div>
        </div>
        <div className="qualification">
          <div className="content bootstrap">  </div>
          <div class="skills__bar skills__bootstrap"> </div>
          <div>
            <br></br>
            <span class="skills__percentage">80%</span>
          </div>
          <div className="test"><i class='bx bxl-bootstrap skills__icon top'></i> <h1>bootstrap</h1> </div>
        </div>
        <div className="qualification">
          <div className="content react">  </div>
          <div class="skills__bar skills__react"> </div>
          <div>
            <br></br>
            <span class="skills__percentage">75%</span>
          </div>
          <div className="test"><i class='bx bxl-react skills__icon top'></i> <h1>react</h1> </div>
        </div>
      </div>
      <a href='#projects1' className='scroll-down'>
        <hr />
        <h5>See Projects</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
    </div>

    
  );
};

export default Qualifications;
