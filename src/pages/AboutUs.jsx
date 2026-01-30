import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/AboutUs-TeamPhoto.png";
import AboutUsSection1 from "../components/AboutUs/aboutussection1/AboutUsSection1.jsx";
import AboutUsSection2 from "../components/AboutUs/aboutussection2/AboutUsSection2.jsx";
import AboutUsSection3 from "../components/AboutUs/aboutussection3/AboutUsSection3.jsx";
import AboutUsSection4 from "../components/AboutUs/aboutussection4/AboutUsSection4.jsx";
import HomeSection9 from "../components/Home/homesection9/HomeSection9.jsx";

function AboutUs() {
  return (
    <>
      <Navbar />
      <Hero title="About Us" backgroundImage={HeroImg} />
      <AboutUsSection1 />
      <AboutUsSection2 />
      <AboutUsSection3 />
      <AboutUsSection4 />
      <HomeSection9 />
      <Footer />
    </>
  );
}

export default AboutUs;
