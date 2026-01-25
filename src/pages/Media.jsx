import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContactSection1 from "../components/Home/homesection9/HomeSection9.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/MediaHero.png";
import MediaSection2 from "../components/Media/MediaSection2/MediaSection2.jsx";

function Media() {
  return (
    <div>
      <Navbar />
      <Hero title="Media" backgroundImage={HeroImg} />
      <MediaSection2 />
      <ContactSection1 />
      <Footer />
    </div>
  );
}

export default Media;
