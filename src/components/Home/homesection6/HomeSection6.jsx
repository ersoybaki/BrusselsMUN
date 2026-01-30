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
              <h3 className="homesection6-card-title">Global Perspective</h3>
              <p className="homesection6-card-text">
                Delegates come from across Europe with different political views
                and priorities. You'll see how these differences play out in
                real negotiations. Understanding what shapes each country's
                position, their history, economy, interests, is what makes you a
                better diplomat. That is shaped alongside your fellow delegates.
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
                  Real-Time Negotiation
                </h3>
                <p className="homesection6-small-text">
                  Practice the art of coalition-building, compromise, and
                  persuasion under pressure. You'll navigate competing interests
                  and find workable solutions in real debates.
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
                <h3 className="homesection6-small-title">
                  Research & Preparation
                </h3>
                <p className="homesection6-small-text">
                  Learn to synthesize complex policy briefs and understand
                  committee backgrounds in days, not weeks. Delegates master
                  efficient research methods they use long after Brussels.
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
                  Strategic Communication
                </h3>
                <p className="homesection6-small-text">
                  Craft arguments that land. Write resolutions that matter.
                  Speak with confidence when stakes feel real. These are skills
                  that define diplomatic work.
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
