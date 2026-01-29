import React from "react";
import "./MediaSection1.css";

const testimonials = [
  {
    name: "John",
    handle: "@john",
    text: "I'm at a loss for words. This is amazing. I love it.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    name: "Jack",
    handle: "@jack",
    text: "I've never seen anything like this before. It's amazing. I love it.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    name: "Jill",
    handle: "@jill",
    text: "I don't know what to say. I'm speechless. This is amazing.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    name: "John",
    handle: "@john",
    text: "I'm at a loss for words. This is amazing. I love it.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    name: "Jack",
    handle: "@jack",
    text: "I've never seen anything like this before. It's amazing. I love it.",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    name: "Jill",
    handle: "@jill",
    text: "I don't know what to say. I'm speechless. This is amazing.",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

const TestimonialCard = ({ name, handle, text, gradient }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <div className="testimonial-avatar" style={{ background: gradient }} />
      <div className="testimonial-info">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-handle">{handle}</span>
      </div>
    </div>
    <p className="testimonial-text">{text}</p>
  </div>
);

const MarqueeColumn = ({ testimonials, duration, reverse = false }) => (
  <div className="marquee-column">
    <div
      className={`marquee-content ${reverse ? "marquee-reverse" : ""}`}
      style={{ "--duration": `${duration}s` }}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

const MediaSection1 = () => {
  const column1 = [testimonials[0], testimonials[1], testimonials[2]];
  const column2 = [testimonials[3], testimonials[4], testimonials[5]];
  const column3 = [testimonials[1], testimonials[3], testimonials[0]];
  const column4 = [testimonials[2], testimonials[5], testimonials[4]];
  const column5 = [testimonials[4], testimonials[0], testimonials[3]];

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
            <MarqueeColumn testimonials={column1} duration={25} />
            <MarqueeColumn testimonials={column2} duration={30} reverse />
            <MarqueeColumn testimonials={column3} duration={28} />
            <MarqueeColumn testimonials={column4} duration={32} reverse />
            <MarqueeColumn testimonials={column5} duration={26} />
          </div>
          <div className="marquee-fade marquee-fade-top" />
          <div className="marquee-fade marquee-fade-bottom" />
        </div>
      </div>
    </section>
  );
};

export default MediaSection1;
