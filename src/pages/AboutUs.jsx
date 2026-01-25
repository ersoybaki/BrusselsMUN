import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/AboutUs-TeamPhoto.png";

function AboutUs() {
  return (
    <>
      <Navbar />
      <Hero title="About Us" backgroundImage={HeroImg} />
    </>
  );
}

export default AboutUs;
