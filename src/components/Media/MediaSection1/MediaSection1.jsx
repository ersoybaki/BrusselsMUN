import React from "react";
import "./MediaSection1.css";
import img1 from "../../../assets/images/Placeholders/aboutus1.jpg";
import img2 from "../../../assets/images/Placeholders/aboutus2.jpg";
import img3 from "../../../assets/images/Placeholders/conference1.jpg";
import img4 from "../../../assets/images/Placeholders/conference2.jpg";
import img5 from "../../../assets/images/Placeholders/conference3.jpg";
import img12 from "../../../assets/images/Placeholders/conference5.jpg";
import img13 from "../../../assets/images/Placeholders/conference6.jpg";
import img14 from "../../../assets/images/Placeholders/conference7.jpg";

import img6 from "../../../assets/images/Placeholders/homepage1.jpg";
import img7 from "../../../assets/images/Placeholders/homepage2.jpg";
import img8 from "../../../assets/images/Placeholders/homepage3.jpg";
import img9 from "../../../assets/images/Placeholders/homepage4.jpg";
import img10 from "../../../assets/images/Placeholders/homepage5.jpg";
import img11 from "../../../assets/images/Placeholders/homepage6.jpg";

// Replace these with your actual image URLs
// const req = require.context("../../../assets/images/Marquee", false, /\.jpg$/);

// const images = Array.from({ length: 25 }, (_, i) => ({
//   id: i + 1,
//   src: req(`./marquee${i + 1}.jpg`),
//   alt: `Gallery image ${i + 1}`,
// }));

const images = [
  { id: 1, src: img1, alt: "Gallery image 1" },
  { id: 2, src: img2, alt: "Gallery image 2" },
  { id: 3, src: img3, alt: "Gallery image 3" },
  { id: 4, src: img4, alt: "Gallery image 4" },
  { id: 5, src: img5, alt: "Gallery image 5" },
  { id: 6, src: img6, alt: "Gallery image 6" },
  { id: 7, src: img7, alt: "Gallery image 7" },
  { id: 8, src: img8, alt: "Gallery image 8" },
  { id: 9, src: img9, alt: "Gallery image 9" },
  { id: 10, src: img10, alt: "Gallery image 10" },
  { id: 11, src: img11, alt: "Gallery image 11" },
  { id: 12, src: img12, alt: "Gallery image 12" },
  { id: 13, src: img13, alt: "Gallery image 13" },
  { id: 14, src: img14, alt: "Gallery image 14" },
];

const ImageCard = ({ src, alt }) => (
  <div className="image-card">
    <img src={src || "/placeholder.svg"} alt={alt} loading="lazy" />
  </div>
);

const MarqueeColumn = ({ images, duration, reverse = false }) => (
  <div className="marquee-column">
    <div
      className={`marquee-content ${reverse ? "marquee-reverse" : ""}`}
      style={{ "--duration": `${duration}s` }}
    >
      {[...images, ...images].map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>
  </div>
);

const MediaSection1 = () => {
  const column1 = [images[0], images[1], images[2], images[3]];
  const column2 = [images[4], images[5], images[6], images[7]];
  const column3 = [images[8], images[9], images[10], images[11]];
  const column4 = [images[12], images[13], images[10], images[9]];
  const column5 = [images[0], images[1], images[2], images[3]];
  const column6 = [images[4], images[5], images[6], images[7]];
  return (
    <section className="media-section">
      {/* Header Section */}
      <div className="media-header">
        <span className="media-badge">Relive the Moments</span>
        <h2 className="media-title">
          The Official Conference{" "}
          <span className="media-title-highlight">Gallery</span>
        </h2>
        <p className="media-description">
          Explore the definitive collection of moments captured at the heart of
          European diplomacy
        </p>
        <button className="media-cta">Access Google Drive Photos</button>
      </div>

      {/* 3D Marquee Container */}
      <div className="marquee-outer">
        <div className="marquee-container">
          <div className="marquee-wrapper">
            <MarqueeColumn images={column1} duration={25} />
            <MarqueeColumn images={column2} duration={30} reverse />
            <MarqueeColumn images={column3} duration={28} />
            <MarqueeColumn images={column4} duration={32} reverse />
            <MarqueeColumn images={column5} duration={26} />
            <MarqueeColumn images={column6} duration={29} reverse />
          </div>
          {/* <div className="marquee-fade marquee-fade-top" />
          <div className="marquee-fade marquee-fade-bottom" /> */}
        </div>
      </div>
    </section>
  );
};

export default MediaSection1;
