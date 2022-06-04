import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiAdobeillustrator } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import React from 'react';

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineHtml5 className="icon" />
      </a>
      <a href="#about2">
        <SiAdobeillustrator className="icon" />
      </a>
      <a href="#projects1">
        <MdOutlineWeb className="icon" />
      </a>
      <a href="#projects2">
        <MdOutlineDesignServices className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
