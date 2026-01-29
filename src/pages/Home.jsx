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
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection1 />
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
