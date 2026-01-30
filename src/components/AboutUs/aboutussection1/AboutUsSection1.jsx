"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import "./AboutUsSection1.css";
import StickyScrollImg1 from "../../../assets/images/StickyScroll1.jpg";
import StickyScrollImg2 from "../../../assets/images/StickyScroll2.jpg";
import StickyScrollImg3 from "../../../assets/images/StickyScroll3.JPG";

const content = [
  {
    label: "OUR VISION",
    title: "Where It All Began",
    description:
      "BrusselsMUN was born from a simple realization: Model UN conferences often simulate diplomacy, but rarely connect delegates to where diplomacy actually happens. Being in Brussels, the heart of European decision-making changes everything. That realization became our foundation.",
    image: StickyScrollImg1,
  },
  {
    label: "OUR STORY",
    title: "From Vision to Reality",
    description:
      "We began as an ambitious vision that has grown into a conference where 150+ delegates from 35+ countries don't just debate resolutions, they visit the European Parliament, and build networks that shape their futures. ",
    image: StickyScrollImg2,
  },
  {
    label: "OUR VALUES",
    title: "Where You Belong",
    description:
      "Whether you're passionate about climate policy, human rights, or international security, BrusselsMUN offers the platform, the access, and the community to turn that apassion into impact.",
    image: StickyScrollImg3,
  },
];

export function AboutUsSection1() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <section className="about-section">
      <motion.div className="scroll-container" ref={ref}>
        <div className="content-wrapper">
          <div className="text-content">
            {content.map((item, index) => (
              <div key={item.title + index} className="content-item">
                <motion.span
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="content-label"
                >
                  {item.label}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="content-title"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="content-description"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="scroll-spacer" />
          </div>

          <div className="sticky-image-container">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="image-wrapper"
            >
              <img
                src={content[activeCard].image || "/placeholder.svg"}
                alt={content[activeCard].title}
                className="sticky-image"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutUsSection1;
