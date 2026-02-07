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
              eight elite committees, DISEC, NATO, Crisis Management, UNHCR, EU
              Council. Giving each delegate direct access to Europe&apos;s
              institutions. This is BrusselsMUN.
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
              Including DISEC, NATO, Crisis Management, UNHCR, EU Council, and
              more. Each committee tackles real policy challenges that shape
              European and global affairs.
            </p>
          </div>

          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">3</div>
            <div className="homesection5-stat-bar red-bar"></div>
            <p className="homesection5-stat-text">
              Institutional visits during the conference schedule includes the
              European Parliament, Belgian Permanent Representative to the EU
              and UN House.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection5;
