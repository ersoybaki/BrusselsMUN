import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/2026Conference-HeroImage.png";
import ConferenceSection1 from "../components/2026Conference/ConferenceSection1/ConferenceSection1.jsx";
import ConferenceSection2 from "../components/2026Conference/ConferenceSection2/ConferenceSection2.jsx";
import ConferenceSection3 from "../components/2026Conference/ConferenceSection3/ConferenceSection3.jsx";
import ConferenceSection4 from "../components/2026Conference/ConferenceSection4/ConferenceSection4.jsx";
import ConferenceSection5 from "../components/2026Conference/ConferenceSection5/ConferenceSection5.jsx";
import ConferenceSection6 from "../components/Home/homesection9/HomeSection9.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Coneference2026() {
  return (
    <>
      <Navbar />
      <Hero title="2026 Conference" backgroundImage={HeroImg} />
      <ConferenceSection1 />
      <ConferenceSection2 />
      <ConferenceSection3 />
      <ConferenceSection4 />
      <ConferenceSection5 />
      <ConferenceSection6 />
      <Footer />
    </>
  );
}

export default Coneference2026;
