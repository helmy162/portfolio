import "./projects2.css";
import React from 'react';
import { AiOutlineBehance } from "react-icons/ai";


const Projects2 = () => {
  return (
    <div id="projects2" className="container members-container">
      <h1 className="member-txt">GRAPHIC DESIGN PROJECTS</h1>
      <div className="member member-1">
        <div className="member-img1"></div>
        <div className="member-info">
          <h1 className="name">Cavigrum</h1>
          <h3 className="position">Astronomy Club</h3>
          <h4 className="about">
          I led the propaganda team and also was the project manager for this event. <br></br>
          I was responsible for all the event design including (logo, flyers, flags, cards, shirts). <br></br>
          Also the photography during the event and the video editing for the recap video by the end of the trip day.
          </h4>
            <a href="https://www.behance.net/gallery/143255583/Cavigrum" className="contact-member">
              <span>Behance</span>
            </a>
            <a href="https://www.facebook.com/astronomyauc/" className="contact-member2">
              <span>Website</span>
            </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img2"></div>
        <div className="member-info">
          <h1 className="name">Plebits Logo</h1>
          <h3 className="position">Plebits</h3>
          <h4 className="about">
            Plebits is an online tech startup that creates digital projects for businesses. I was responsible for designing their logo in a modern way with the tech magic touch.
            autem eius!
          </h4>
          <a href="https://www.behance.net/gallery/145228171/Plebits-Logo" className="contact-member">
            <span>Behance</span>
          </a>
          <a href="https://plebits.com/" className="contact-member2">
              <span>Website</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img3"></div>
        <div className="member-info">
          <h1 className="name">Turbosmurfs Logo and Media Posts</h1>
          <h3 className="position">turbosmurfs.gg</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://www.behance.net/gallery/145260459/Turbosmurfs" className="contact-member">
            <span>Behance</span>
          </a>
          <a href="https://turbosmurfs.gg/" className="contact-member2">
              <span>Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
