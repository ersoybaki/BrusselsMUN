import React from "react";
import "./MediaSection1.css";

// Replace these with your actual image URLs
const req = require.context("../../../assets/images/Marquee", false, /\.jpg$/);

const images = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  src: req(`./marquee${i + 1}.jpg`),
  alt: `Gallery image ${i + 1}`,
}));
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
  const column4 = [images[12], images[13], images[14], images[15]];
  const column5 = [images[16], images[17], images[18], images[19]];
  const column6 = [images[20], images[21], images[22], images[23]];
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
