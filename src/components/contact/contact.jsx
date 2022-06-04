import "./contact.css";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import React from 'react';

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>

        <div className="contact-links">

        <a
          href="https://www.behance.net/mohamedyasser11"
          className="contact youtube"
          target={"blank"}
        >
          <AiFillBehanceCircle className="icon" />
          <h2>
            Behance <span>Mohamed Yasser</span>
          </h2>
        </a>

        <a
          href="https://github.com/helmy162"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            Github <span>helmy162</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/mohamed-yasser-b70763177/" className="contact instagram">
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linkedin <span>Mohamed Yasser</span>
          </h2>
        </a>
      </div>
      <div className="contact-links">

        <a
          href="https://www.facebook.com/HForHelmy"
          className="contact youtube"
          target={"blank"}
        >
          <FaFacebook className="icon" />
          <h2>
            Facebook <span>Mohamed Y. Helmy</span>
          </h2>
        </a>

        <a
          href="https://wa.me/+201013421486"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+201013421486</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/hforhelmy" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>Mohamed Y. Helmy</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
