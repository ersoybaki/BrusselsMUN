"use client";

import "./ConferenceSection2.css";

export default function ConferenceSection2({
  images,
  backgroundColor = "#ffffff",
}) {
  return (
    <section className="conference-section-2" style={{ backgroundColor }}>
      <div className="conference-section-2__slider">
        <div className="conference-section-2__track">
          {images.map((image, index) => (
            <div key={index} className="conference-section-2__slide">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="conference-section-2__logo"
              />
            </div>
          ))}
          {/* Duplicate images for seamless infinite loop */}
          {images.map((image, index) => (
            <div
              key={`duplicate-${index}`}
              className="conference-section-2__slide"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="conference-section-2__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
