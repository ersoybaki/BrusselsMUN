import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/2026Conference-HeroImage.png";
import ConferenceSection2 from "../components/2026Conference/ConferenceSection2/ConferenceSection2.jsx";
import ConferenceSection3 from "../components/2026Conference/ConferenceSection3/ConferenceSection3.jsx";
import ConferenceSection4 from "../components/2026Conference/ConferenceSection4/ConferenceSection4.jsx";
import ConferenceSection5 from "../components/2026Conference/ConferenceSection5/ConferenceSection5.jsx";
import ConferenceSection6 from "../components/Home/homesection9/HomeSection9.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Logo1 from "../assets/images/SlideImages/International_Criminal_Court_logo.svg.png";
import Logo2 from "../assets/images/SlideImages/Logo_UNESCO_2021.svg.png";
import Logo3 from "../assets/images/SlideImages/Flag_of_NATO.svg";
import Logo4 from "../assets/images/SlideImages/Council_of_the_EU_and_European_Council.svg.png";
import Logo5 from "../assets/images/SlideImages/OECD_logo_new.svg.png";
import Logo6 from "../assets/images/SlideImages/UN_emblem_blue.svg.png";
import Logo7 from "../assets/images/SlideImages/UNHCR-visibility-vertical-Blue-RGB-v2015.jpg";
import Logo8 from "../assets/images/SlideImages/United_Nations_Human_Rights_Council_Logo.svg";

const sampleLogos = [
  {
    src: Logo1,
    alt: "United Nations",
  },
  {
    src: Logo2,
    alt: "UNESCO",
  },
  {
    src: Logo3,
    alt: "NATO",
  },
  {
    src: Logo4,
    alt: "OECD",
  },
  {
    src: Logo5,
    alt: "European Union",
  },
  {
    src: Logo6,
    alt: "International Court of Justice",
  },
  {
    src: Logo7,
    alt: "UNHCR",
  },
  {
    src: Logo8,
    alt: "Human Rights Council",
  },
];

function Conference2026() {
  return (
    <>
      <Navbar />
      <Hero title="2026 Conference" backgroundImage={HeroImg} />
      <ConferenceSection2 images={sampleLogos} backgroundColor="#ffffff" />
      <ConferenceSection3 />
      <ConferenceSection4 />
      <ConferenceSection5 />
      <ConferenceSection6 />
      <Footer />
    </>
  );
}

export default Conference2026;
