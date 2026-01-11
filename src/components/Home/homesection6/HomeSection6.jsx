import "./HomeSection6.css";
import Section6Img1 from "../../../assets/images/Section6Img1.png";
import Section6Img2 from "../../../assets/images/Section6Img2.png";
import Section6Img3 from "../../../assets/images/Section6Img3.png";
import Section6Img4 from "../../../assets/images/Section6Img4.png";

const HomeSection6 = () => {
  return (
    <section className="homesection6">
      <div className="homesection6-container">
        <div className="homesection6-header">
          <p className="homesection6-subtitle">BENEFITS FOR DELEGATES</p>
          <h2 className="homesection6-title">Why Attend?</h2>
          <p className="homesection6-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="homesection6-grid">
          {/* Left side - Large image with content below */}
          <div className="homesection6-left">
            <img
              src={Section6Img1}
              alt="Business professionals collaborating"
              className="homesection6-large-image"
            />
            <div className="homesection6-left-content">
              <h3 className="homesection6-card-title">
                Prestige & Credibility
              </h3>
              <p className="homesection6-card-text">
                This conference helps you explore what global careers actually
                feel like. The themes, committee formats, and real-world policy
                challenges give you practical exposure to international
                relations, law, politics, economics, and more. Most importantly,
                you'll leave with concrete experiences and examples you can use
                in interviews and personal statements—what you worked on, how
                you led, and what results you helped create. Beyond the topic,
                you practice real working skills: researching fast, speaking
                clearly, negotiating, and turning debate into a written result.
                You'll also leave with specific examples you can use in
                interviews and personal statements.
              </p>
              <a href="/contact" className="homesection6-button">
                GET IN TOUCH!
              </a>
            </div>
          </div>

          {/* Right side - 3 smaller cards stacked vertically */}
          <div className="homesection6-right">
            <div className="homesection6-small-card">
              <img
                src={Section6Img2}
                alt="Delegates networking"
                className="homesection6-small-image"
              />
              <div className="homesection6-small-content">
                <h3 className="homesection6-small-title">
                  Networking Opportunities
                </h3>
                <p className="homesection6-small-text">
                  MUN is one of the fastest ways to meet driven people outside
                  your usual circle. You'll collaborate with delegates from
                  different schools and countries, negotiate blocs, and build
                  relationships through committee sessions and social events.
                  These connections often become future conference teammates,
                  study partners, or friends—because you bond while solving
                  problems together.
                </p>
              </div>
            </div>

            <div className="homesection6-small-card">
              <img
                src={Section6Img3}
                alt="Professional skills discussion"
                className="homesection6-small-image"
              />
              <div className="homesection6-small-content">
                <h3 className="homesection6-small-title">Skill Development</h3>
                <p className="homesection6-small-text">
                  You'll improve skills you can use immediately in school and
                  beyond. Brussels MUN trains you to research efficiently, argue
                  with clarity, respond confidently in real time, and write
                  strong policy clauses. You'll also learn how to negotiate,
                  build consensus, think strategically, and persuade without
                  "winning at all costs"—the core of effective diplomacy.
                </p>
              </div>
            </div>

            <div className="homesection6-small-card">
              <img
                src={Section6Img4}
                alt="Professional woman with laptop"
                className="homesection6-small-image"
              />
              <div className="homesection6-small-content">
                <h3 className="homesection6-small-title">
                  Career Acceleration
                </h3>
                <p className="homesection6-small-text">
                  This conference helps you explore what global careers actually
                  feel like. The themes, committee formats, and real-world
                  policy challenges give you practical exposure to international
                  relations, law, politics, economics, and more. Most
                  importantly, you'll leave with concrete experiences and
                  examples you can use in interviews and personal statements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
