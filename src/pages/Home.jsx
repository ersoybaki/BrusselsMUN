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

import Elevates from "../assets/images/Partners/Elevates-Icon-White---PNG.png";
import Logo1 from "../assets/images/Partners/European-Parliament.png";
import Logo2 from "../assets/images/Partners/GIMUN.png";
import Logo3 from "../assets/images/Partners/Hertie-School.png";
import Logo4 from "../assets/images/Partners/JetImport.png";
import Logo5 from "../assets/images/Partners/Lei-MUN.png";
import Logo6 from "../assets/images/Partners/Louvain-MUN.png";
import Logo7 from "../assets/images/Partners/NATO.png";
import Logo8 from "../assets/images/Partners/Visit-Brussels.png";
import Logo9 from "../assets/images/Partners/VUBWhite.png";
import Logo10 from "../assets/images/Partners/Antwerp-MUN.png";
import Logo11 from "../assets/images/Partners/EuropeanCommissionLogo.png";
import Logo12 from "../assets/images/Partners/FDNU.png";
import Logo13 from "../assets/images/Partners/permanent-representation-of-belgium-to-the-european-union.png";
import Logo14 from "../assets/images/Partners/unnamed.png";
import Logo15 from "../assets/images/Partners/Ghent-MUN.png";

const sampleLogos = [
  {
    src: Elevates,
    alt: "Elevates",
  },
  {
    src: Logo1,
    alt: "EU Parliament",
  },
  {
    src: Logo2,
    alt: "GIMUN",
  },
  {
    src: Logo3,
    alt: "Hertie School",
  },
  {
    src: Logo4,
    alt: "JetImport",
  },
  {
    src: Logo5,
    alt: "Lei-MUN",
  },
  {
    src: Logo6,
    alt: "Louvain-MUN",
  },
  {
    src: Logo7,
    alt: "NATO",
  },
  {
    src: Logo8,
    alt: "Visit Brussels",
  },
  {
    src: Logo9,
    alt: "VUB",
  },
  {
    src: Logo10,
    alt: "Antwerp MUN",
  },
  {
    src: Logo11,
    alt: "European Commission",
  },
  {
    src: Logo12,
    alt: "FDNU",
  },
  {
    src: Logo13,
    alt: "Belgium",
  },
  {
    src: Logo14,
    alt: "Unnamed",
  },
  {
    src: Logo15,
    alt: "Ghent MUN",
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
