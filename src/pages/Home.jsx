import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import HomeSection1 from "../components/Home/homesection1/HomeSection1.jsx";
import HomeSection2 from "../components/Home/homesection2/HomeSection2.jsx";
import HomeSection3 from "../components/Home/homesection3/HomeSection3.jsx";
import HomeSection4 from "../components/Home/homesection4/HomeSection4.jsx";
import HomeSection5 from "../components/Home/homesection5/HomeSection5.jsx";
import HomeSection6 from "../components/Home/homesection6/HomeSection6.jsx";
import HomeSection8 from "../components/Home/homesection8/HomeSection8.jsx";
import HomeSection9 from "../components/Home/homesection9/HomeSection9.jsx";
import Slider from "../components/2026Conference/ConferenceSection2/ConferenceSection2.jsx";
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

function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection1 />
      <Slider images={sampleLogos} backgroundColor="#004287" />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />

      <HomeSection8 />
      <HomeSection9 />
      <Footer />
    </div>
  );
}

export default Home;
