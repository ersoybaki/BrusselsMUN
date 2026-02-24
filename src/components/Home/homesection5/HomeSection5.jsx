"use client";

import "./HomeSection5.css";
import GlobeImg from "../../../assets/images/GlobeImage.png";

function HomeSection5() {
  return (
    <section className="homesection5">
      <div className="homesection5-stats">
        <div className="homesection5-stats-content">
          <div className="homesection5-stats-left">
            <span className="homesection5-stats-label">STATS</span>
            <h2 className="homesection5-stats-title">
              2025 Conference Impact Overview
            </h2>
            <p className="homesection5-stats-description">
              What happens when you bring 100+ delegates from 35+ countries into
              a real diplomatic environment? The numbers tell the story.
            </p>
          </div>

          <div className="homesection5-globe-container">
            <img
              src={GlobeImg}
              alt="Globe showing international connections from Brussels to cities worldwide"
              className="homesection5-globe-image"
            />
          </div>
        </div>

        <div className="homesection5-stats-grid">
          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">100+</div>
            <div className="homesection5-stat-bar red-bar"></div>
            <p className="homesection5-stat-text">
              Delegates from across Europe, committed to serious diplomatic
              engagement and real policy debate.
            </p>
          </div>

          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">35</div>
            <div className="homesection5-stat-bar"></div>
            <p className="homesection5-stat-text">
              Countries represented, creating genuine international dialogue and
              cross-cultural understanding at every level.
            </p>
          </div>

          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">8</div>
            <div className="homesection5-stat-bar"></div>
            <p className="homesection5-stat-text">
              Committees that tackled real-world issues, from climate change to
              global health, giving delegates hands-on experience with
              diplomacy.
            </p>
          </div>

          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">3</div>
            <div className="homesection5-stat-bar red-bar"></div>
            <p className="homesection5-stat-text">
              Institutional visits, including a unique tour of the Elevates MUN
              conference venue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection5;
