import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import About2 from "./components/about2/about2";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Qualifications from "./components/qualifications/qualifications";
import Projects1 from "./components/projects1/projects1";
import Projects2 from "./components/projects2/projects2";
import Footer from "./components/footer/footer";
import React from 'react';

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      <Header />
      <Navbar />
      <Home />
      <About />
      <About2 />
      <Projects1 />
      <Projects2 />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
