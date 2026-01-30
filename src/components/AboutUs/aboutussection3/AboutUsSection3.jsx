"use client";

import "./AboutUsSection3.css";

const valuesData = [
  {
    number: 1,
    title: "Diplomatic Excellence",
    description:
      "Upholding the highest standards of debate and negotiation, mirroring the intensity of real-world decision-making in the heart of the EU.",
  },
  {
    number: 2,
    title: "Academic Rigor",
    description:
      "Beyond simulation, we provide deep educational frameworks, ensuring every delegate leaves with a mastered understanding of global policy.",
  },
  {
    number: 3,
    title: "Bridging Perspectives",
    description:
      "We create space where diverse backgrounds converge to solve complex international challenges. Different countries, different views, different experiences, that's where real understanding happens.",
  },
];

export default function AboutUsSection3() {
  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-grid">
          {/* Header Area */}
          <div className="values-header">
            <span className="values-label">CORE VALUES</span>
            <h2 className="values-title">
              We Guarantee
              <br />
              The Best For Future
            </h2>
            <p className="values-description">
              BrusselsMUN is built on four core commitments. Everything we do
              comes back to these principles.
            </p>
          </div>

          {/* Card 1 - Top Right */}
          <div className="value-card value-card-1">
            <div className="card-number">
              <span>{valuesData[0].number}</span>
            </div>
            <h3 className="card-title">{valuesData[0].title}</h3>
            <p className="card-description">{valuesData[0].description}</p>
          </div>

          {/* Card 2 - Bottom Left */}
          <div className="value-card value-card-2">
            <div className="card-number">
              <span>{valuesData[1].number}</span>
            </div>
            <h3 className="card-title">{valuesData[1].title}</h3>
            <p className="card-description">{valuesData[1].description}</p>
          </div>

          {/* Card 3 - Bottom Right */}
          <div className="value-card value-card-3">
            <div className="card-number">
              <span>{valuesData[2].number}</span>
            </div>
            <h3 className="card-title">{valuesData[2].title}</h3>
            <p className="card-description">{valuesData[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
