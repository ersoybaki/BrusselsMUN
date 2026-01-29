import { useState } from "react";
import "./HomeSection3.css";
import HomepagePhone from "../../../assets/images/HomepagePhoneMockup.png";

const HomeSection3 = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Location & Dates",
      content:
        "Hosted in Brussels, Belgium, At The Brussels School Of Governance (VUB)—In The Heart Of Europe's Diplomatic And Parliamentary Capital. Expect A Professional Venue, International Atmosphere, And Easy Access To EU Institutions And The City Centre - February 5-8, 2026.",
    },
    {
      title: "Expected Delegates",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Countries Represented",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Enrollment",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="homesection3">
      <div className="homesection3-container">
        <div className="homesection3-content">
          <span className="homesection3-label">OVERVIEW</span>
          <h2 className="homesection3-title">
            Brussels 2026 MUN Conference Overview
          </h2>
          <p className="homesection3-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="homesection3-accordion">
            {accordionItems.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-header ${
                    activeAccordion === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  <span className="accordion-icon">
                    {activeAccordion === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`accordion-content ${
                    activeAccordion === index ? "active" : ""
                  }`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/conference-2026" className="homesection3-learn-more">
            LEARN MORE
          </a>
        </div>

        <div className="homesection3-phone">
          <div className="phone-mockup">
            <img
              src={HomepagePhone}
              alt="Mobile Conference View"
              className="phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
