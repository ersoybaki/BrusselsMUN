import "./GlobeGraphic.css";

function GlobeGraphic() {
  return (
    <div className="globe-graphic">
      <div className="globe-container">
        {/* Dotted globe pattern */}
        <div className="globe-dots">
          {[...Array(30)].map((_, row) => (
            <div key={row} className="globe-row" style={{ "--row": row }}>
              {[...Array(40)].map((_, col) => (
                <div
                  key={col}
                  className="globe-dot"
                  style={{ "--col": col }}
                ></div>
              ))}
            </div>
          ))}
        </div>

        {/* Connection points */}
        <div
          className="connection-point"
          style={{ top: "15%", left: "20%" }}
        ></div>
        <div
          className="connection-point"
          style={{ top: "35%", right: "30%" }}
        ></div>
        <div
          className="connection-point"
          style={{ top: "55%", left: "35%" }}
        ></div>
        <div
          className="connection-point"
          style={{ bottom: "25%", right: "25%" }}
        ></div>
        <div
          className="connection-point"
          style={{ bottom: "35%", left: "25%" }}
        ></div>
      </div>

      {/* Curved arc decoration */}
      <svg
        className="globe-arc"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 200 Q 150 100, 250 150"
          stroke="#38bdf8"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export default GlobeGraphic;
