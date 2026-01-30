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
        "We're welcoming around 100+ delegates from universities and schools across Europe. Everyone here is serious about international affairs, whether they've done MUN before or they're stepping into it for the first time. You'll be working alongside people who are genuinely curious about policy, who take their research seriously, and who treat negotiations like they matter. It's a smaller, more focused group than you'll find at larger conferences.",
    },
    {
      title: "Countries Represented",
      content:
        "Delegates come from over 35 countries across Europe and beyond, That mix of backgrounds means every committee discussion feels genuinely international, and the networking happens naturally, you'll meet people doing things you actually care about. It's the kind of diversity that mirrors real international bodies and makes the whole experience feel grounded in reality.",
    },
    {
      title: "Enrollment",
      content:
        "We operate on a rolling basis with limited spaces. Applications have now closed, and we're reviewing submissions carefully. Successful delegates have received confirmation. Once confirmed, you'll receive payment and accommodation details. The delegate fee covers everything: all meals, institutional visits, and conference materials. We're selective about who joins us, and we're excited about the group coming to Brussels this February.",
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
