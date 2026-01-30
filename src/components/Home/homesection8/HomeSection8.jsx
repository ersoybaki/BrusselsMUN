import { useState, useRef, useEffect } from "react";
import "./HomeSection8.css";
import Img1 from "../../../assets/images/Section6Img1.png";

const galleryImages = [
  {
    id: 1,
    src: Img1,
    alt: "Conference presentation",
  },
  {
    id: 2,
    src: Img1,
    alt: "International event",
  },
  {
    id: 3,
    src: Img1,
    alt: "Award ceremony",
  },
  {
    id: 4,
    src: Img1,
    alt: "Student presentation",
  },
  {
    id: 5,
    src: Img1,
    alt: "Student presentation",
  },
  {
    id: 6,
    src: Img1,
    alt: "Celebration photo",
  },
];

export default function HomeSection8() {
  const [activeIndex, setActiveIndex] = useState(2);
  const trackRef = useRef(null);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const getTranslateForIndex = (index) => {
    if (!trackRef.current || !sliderRef.current) return 0;
    const items = trackRef.current.children;
    if (items.length === 0) return 0;

    const activeItem = items[index];
    const sliderWidth = sliderRef.current.offsetWidth;
    const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
    return -(itemCenter - sliderWidth / 2);
  };

  useEffect(() => {
    if (trackRef.current && sliderRef.current) {
      const translate = getTranslateForIndex(activeIndex);
      setCurrentTranslate(translate);
      setPrevTranslate(translate);
      trackRef.current.style.transform = `translateX(${translate}px)`;
    }
  }, [activeIndex]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const pageX = e.type === "touchstart" ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    setPrevTranslate(currentTranslate);

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const pageX = e.type === "touchmove" ? e.touches[0].pageX : e.pageX;
    const diff = pageX - startX;
    const newTranslate = prevTranslate + diff;

    setCurrentTranslate(newTranslate);

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.4s ease";
    }

    const pageX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
    const diff = pageX - startX;
    const threshold = 50;

    let newIndex = activeIndex;

    if (Math.abs(diff) > threshold) {
      if (diff < 0 && activeIndex < galleryImages.length - 1) {
        newIndex = activeIndex + 1;
      } else if (diff > 0 && activeIndex > 0) {
        newIndex = activeIndex - 1;
      }
    }

    setActiveIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleImageClick = (index) => {
    if (!isDragging) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="gallery-label">MEDIA</span>
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-description">
            Explore the great moments that shaped the conference rooms and
            committees. From debates to institutional visits, relive the
            experiences that define BrusselsMUN.
          </p>
        </div>

        <div
          ref={sliderRef}
          className={`gallery-slider ${isDragging ? "is-dragging" : ""}`}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={trackRef}
            className={`gallery-track ${isDragging ? "dragging" : ""}`}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`gallery-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleImageClick(index)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="gallery-image"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-navigation">
          <div className="gallery-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === activeIndex ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#004287" />
                  </svg>
                ) : (
                  <span className="dot-circle"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
