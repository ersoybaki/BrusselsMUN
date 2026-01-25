import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import ContactSection1 from "../components/Home/homesection9/HomeSection9.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/ContactUsHero.png";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero title="Contact Us" backgroundImage={HeroImg} />
      <ContactSection1 />
      <Footer />
    </div>
  );
}

export default Contact;
