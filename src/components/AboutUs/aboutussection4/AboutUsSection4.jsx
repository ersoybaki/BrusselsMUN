"use client";

import { useEffect, useState, useRef } from "react";
import "./AboutUsSection4.css";

const words = [
  { text: "Diplomacy", className: "" },
  { text: "at", className: "" },
  { text: "the", className: "" },
  { text: "heart", className: "" },
  { text: "of", className: "" },
  { text: "Europe.", className: "highlight" },
];

export default function AboutUsSection4() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Typewriter effect - only runs after section is in view
  useEffect(() => {
    if (!hasStarted || isComplete) return;

    const currentWord = words[currentWordIndex];

    if (currentCharIndex < currentWord.text.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      if (currentWordIndex < words.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    }
  }, [currentWordIndex, currentCharIndex, isComplete, hasStarted]);

  const renderWords = () => {
    return words.map((word, wordIndex) => {
      let displayText = "";

      if (wordIndex < currentWordIndex) {
        displayText = word.text;
      } else if (wordIndex === currentWordIndex) {
        displayText = word.text.substring(0, currentCharIndex);
      }

      if (!displayText && wordIndex > currentWordIndex) return null;

      return (
        <span key={wordIndex} className={`word ${word.className}`}>
          {displayText}
          {wordIndex === currentWordIndex && !isComplete && (
            <span className="cursor">|</span>
          )}
          {wordIndex < words.length - 1 && displayText && " "}
        </span>
      );
    });
  };

  return (
    <section ref={sectionRef} className="about-hero">
      <div className="about-hero-container">
        <p className="about-hero-subtitle">Experience BrusselsMUN 2026</p>

        <h1 className="about-hero-title">
          {renderWords()}
          {isComplete && <span className="cursor blink">|</span>}
        </h1>

        <a href="/conference-2026" className="about-hero-button">
          View Conference
        </a>
      </div>
    </section>
  );
}
