import React from "react";
import "./MediaSection1.css";

// Replace these with your actual image URLs
const images = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    alt: "Conference moment 1",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
    alt: "Conference moment 2",
  },
  {
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    alt: "Conference moment 3",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    alt: "Conference moment 4",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
    alt: "Conference moment 5",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop",
    alt: "Conference moment 6",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
    alt: "Conference moment 7",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
    alt: "Conference moment 8",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    alt: "Conference moment 9",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
    alt: "Conference moment 10",
  },
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
  const column1 = [images[0], images[1], images[2]];
  const column2 = [images[3], images[4], images[5]];
  const column3 = [images[6], images[7], images[0]];
  const column4 = [images[1], images[3], images[5]];
  const column5 = [images[2], images[4], images[6]];
  const column6 = [images[7], images[8], images[9]];

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
