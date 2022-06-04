import "./qualifications2.css";
import { BsMouse } from 'react-icons/bs';
import React from 'react';
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";

const Qualifications2 = () => {
  return (
    <div id="qualifications2">
      <span className="quali-text">GRAPHIC DESIGN PROJECTS</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content illustrator"> </div>
          <div class="skills__bar skills__illustrator"> </div> 
          <div>
            <br></br>
            <span class="skills__percentage">95%</span>
          </div>
          <div className="test"><SiAdobeillustrator className="skills__icon top" /> <h1>illustrator</h1> </div>
        </div>
        <div className="qualification">
          <div className="content photoshop">  </div>
          <div class="skills__bar skills__photoshop"> </div>
          <div>
            <br></br>
            <span class="skills__percentage">90%</span>
          </div>
          <div className="test"><SiAdobephotoshop className="skills__icon top" /><h1>photoshop</h1> </div>
        </div>
        <div className="qualification">
          <div className="content indesign">  </div>
          <div class="skills__bar skills__indesign"> </div>
          <div>
            <br></br>
            <span class="skills__percentage">80%</span>
          </div>
          <div className="test"><SiAdobeindesign className="skills__icon top" /> <h1>indesign</h1> </div>
        </div>
      </div>
      <a href='#projects2' className='scroll-down'>
        <hr />
        <h5>See Projects</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
    </div>
  );
};

export default Qualifications2;
