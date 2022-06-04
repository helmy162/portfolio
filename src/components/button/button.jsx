import "./button.css";
import React from 'react';

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#qualifications" className="btn pri">
        Web Development
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
      <a href="#qualifications2" className="btn pri">
        Graphic Design
      </a>
    </div>
  );
}

export default Buttons;
