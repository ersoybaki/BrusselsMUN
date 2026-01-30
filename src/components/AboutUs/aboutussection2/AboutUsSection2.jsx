"use client";

import "./AboutUsSection2.css";
import Faris from "../../../assets/images/Faris.png";

export default function AboutUsSection2() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <blockquote className="quote-text">
          "We didn't create BrusselsMUN to simulate diplomacy. We created it to{" "}
          <span className="quote-highlight">live</span> it. To connect driven
          students with the institutions and professionals shaping our world.
          That's the difference."
        </blockquote>

        <div className="quote-author">
          <div className="author-avatar">
            <img src={Faris} alt="Faris Zebib, Founder of Brussels MUN" />
          </div>
          <div className="author-info">
            <span className="author-name">Faris Zebib</span>
            <span className="author-title">Founder of Brussels MUN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
