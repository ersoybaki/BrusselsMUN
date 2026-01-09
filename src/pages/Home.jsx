import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import HomeSection1 from "../components/Home/homesection1/HomeSection1.jsx";
import HomeSection2 from "../components/Home/homesection2/HomeSection2.jsx";
import HomeSection3 from "../components/Home/homesection3/HomeSection3.jsx";
import HomeSection4 from "../components/Home/homesection4/HomeSection4.jsx";
import HomeSection5 from "../components/Home/homesection5/HomeSection5.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </div>
  );
}

export default Home;
