"use client";

import "./HomeSection5.css";
import { lazy, Suspense, useEffect, useState } from "react";

// Dynamically import Globe - only loads when component renders (not on mobile)
const World = lazy(() =>
  import("../../ui/globe.tsx").then((mod) => ({ default: mod.World })),
);

function HomeSection5() {
  const [isMobile, setIsMobile] = useState(true); // Default true to prevent loading on first render

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 50.8503, lng: 4.3517 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const arcsData = [
    // North America
    {
      order: 1,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: "#38bdf8",
    },
    {
      order: 2,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.4,
      color: "#60a5fa",
    },
    {
      order: 3,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 45.5017,
      endLng: -73.5673,
      arcAlt: 0.35,
      color: "#38bdf8",
    },
    {
      order: 4,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 38.9072,
      endLng: -77.0369,
      arcAlt: 0.32,
      color: "#60a5fa",
    },
    // Europe
    {
      order: 5,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.15,
      color: "#38bdf8",
    },
    {
      order: 6,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.12,
      color: "#60a5fa",
    },
    {
      order: 7,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.15,
      color: "#38bdf8",
    },
    {
      order: 8,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 41.9028,
      endLng: 12.4964,
      arcAlt: 0.2,
      color: "#60a5fa",
    },
    {
      order: 9,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 40.4168,
      endLng: -3.7038,
      arcAlt: 0.22,
      color: "#38bdf8",
    },
    {
      order: 10,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 59.3293,
      endLng: 18.0686,
      arcAlt: 0.2,
      color: "#60a5fa",
    },
    {
      order: 11,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.1,
      color: "#38bdf8",
    },
    {
      order: 12,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 47.3769,
      endLng: 8.5417,
      arcAlt: 0.15,
      color: "#60a5fa",
    },
    // Asia
    {
      order: 13,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.5,
      color: "#38bdf8",
    },
    {
      order: 14,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 39.9042,
      endLng: 116.4074,
      arcAlt: 0.45,
      color: "#60a5fa",
    },
    {
      order: 15,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.48,
      color: "#38bdf8",
    },
    {
      order: 16,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.5,
      color: "#60a5fa",
    },
    {
      order: 17,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 37.5665,
      endLng: 126.978,
      arcAlt: 0.47,
      color: "#38bdf8",
    },
    {
      order: 18,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.42,
      color: "#60a5fa",
    },
    {
      order: 19,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.38,
      color: "#38bdf8",
    },
    {
      order: 20,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 41.0082,
      endLng: 28.9784,
      arcAlt: 0.25,
      color: "#60a5fa",
    },
    // Middle East & Africa
    {
      order: 21,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 30.0444,
      endLng: 31.2357,
      arcAlt: 0.32,
      color: "#38bdf8",
    },
    {
      order: 22,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: -26.2041,
      endLng: 28.0473,
      arcAlt: 0.45,
      color: "#60a5fa",
    },
    {
      order: 23,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.35,
      color: "#38bdf8",
    },
    {
      order: 24,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 33.8886,
      endLng: 35.4955,
      arcAlt: 0.3,
      color: "#60a5fa",
    },
    // South America
    {
      order: 25,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: -23.5505,
      endLng: -46.6333,
      arcAlt: 0.5,
      color: "#38bdf8",
    },
    {
      order: 26,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.52,
      color: "#60a5fa",
    },
    {
      order: 27,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: 4.711,
      endLng: -74.0721,
      arcAlt: 0.4,
      color: "#38bdf8",
    },
    // Oceania
    {
      order: 28,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.7,
      color: "#60a5fa",
    },
    {
      order: 29,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: -37.8136,
      endLng: 144.9631,
      arcAlt: 0.68,
      color: "#38bdf8",
    },
    {
      order: 30,
      startLat: 50.8503,
      startLng: 4.3517,
      endLat: -41.2865,
      endLng: 174.7762,
      arcAlt: 0.72,
      color: "#60a5fa",
    },
  ];

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
              MUN is one of the fastest ways to meet driven people outside your
              usual circle. You'll collaborate with delegates from different
              schools and countries, negotiate blocs, and build relationships
              through committee sessions and social events. These connections
              often become future conference teammates, study partners, or
              friends—because you bond while solving problems together. You'll
              improve skills you can use everywhere: think on your feet,
              research efficiently, argue with clarity, respond confidently in
              real time, and write strong policy clauses.
            </p>
          </div>

          <div className="homesection5-globe-container">
            {!isMobile && (
              <Suspense
                fallback={<div className="globe-loading">Loading...</div>}
              >
                <World data={arcsData} globeConfig={globeConfig} />
              </Suspense>
            )}
          </div>
        </div>

        <div className="homesection5-stats-grid">
          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">82%</div>
            <div className="homesection5-stat-bar red-bar"></div>
            <p className="homesection5-stat-text">
              According to MCC, companies that partner strategically instead of
              outsourcing mechanically achieve a 43% point performance edge —
              because growth is built, not bought.
            </p>
          </div>

          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">28%</div>
            <div className="homesection5-stat-bar"></div>
            <p className="homesection5-stat-text">
              According to MCC, companies that partner strategically instead of
              outsourcing mechanically achieve a 43% point performance edge —
              because growth is built, not bought.
            </p>
          </div>

          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">68%</div>
            <div className="homesection5-stat-bar"></div>
            <p className="homesection5-stat-text">
              According to MCC, companies that partner strategically instead of
              outsourcing mechanically achieve a 43% point performance edge —
              because growth is built, not bought.
            </p>
          </div>

          <div className="homesection5-stat-item">
            <div className="homesection5-stat-number">43%</div>
            <div className="homesection5-stat-bar red-bar"></div>
            <p className="homesection5-stat-text">
              According to MCC, companies that partner strategically instead of
              outsourcing mechanically achieve a 43% point performance edge —
              because growth is built, not bought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection5;
