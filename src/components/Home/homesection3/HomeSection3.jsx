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
      content: "Hosted at Elevates Offices - April 5-8, 2026.",
    },
    {
      title: "Expected Delegates",
      content:
        "We're welcoming around 100+ delegates from universities and schools across Europe.",
    },
    {
      title: "Countries Represented",
      content:
        "Delegates come from over 35 countries across Europe and beyond. That mix of backgrounds means every committee discussion feels genuinely international, and the networking happens naturally, you'll meet people doing things you actually care about. ",
    },
    {
      title: "Enrollment",
      content:
        "We operate on a rolling basis with limited spaces. Applications have now closed, and we're reviewing submissions carefully. Successful delegates have received confirmation.",
    },
  ];

  return (
    <section className="homesection3">
      <div className="homesection3-container">
        <div className="homesection3-content">
          <span className="homesection3-label">OVERVIEW</span>
          <h2 className="homesection3-title">
            Elevates MUN Conference Overview
          </h2>
          <p className="homesection3-description">
            Experience an unparalleled gathering of student delegates who
            convene to address pressing global issues through structured debate
            and diplomatic discourse.
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
            <a href="https://www.google.com/maps/place/Brussels+School+of+Governance+(BSoG)/@50.8216181,4.3912462,287m/data=!3m1!1e3!4m9!1m2!10m1!1e1!3m5!1s0x47c3c4c61e8a39cf:0xa697ab6ddd07a798!8m2!3d50.8213253!4d4.3914686!16s%2Fg%2F1td24l_m?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D">
              <img
                src={HomepagePhone}
                alt="Mobile Conference View"
                className="phone-image"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
