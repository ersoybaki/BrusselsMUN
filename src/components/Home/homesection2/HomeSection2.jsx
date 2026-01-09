import "./HomeSection2.css";
import Image from "../../../assets/images/HomepageSection2.png";

export default function HomeSection2() {
  return (
    <section className="homesection2">
      <div className="homesection2-container">
        <div className="homesection2-image">
          <img src={Image} alt="Students with international flags" />
        </div>

        <div className="homesection2-content">
          <div className="homesection2-label">ABOUT US</div>
          <h2 className="homesection2-heading">
            Together We're Building Brighter Future For The Next Generation
          </h2>
          <p className="homesection2-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod.
          </p>

          <div className="homesection2-features">
            <div className="homesection2-feature-card">
              <div className="feature-number">01</div>
              <h3 className="feature-title">Prestige & Credibility</h3>
              <p className="feature-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div className="homesection2-feature-card">
              <div className="feature-number">02</div>
              <h3 className="feature-title">Networking Opportunities</h3>
              <p className="feature-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div className="homesection2-feature-card">
              <div className="feature-number">03</div>
              <h3 className="feature-title">Skills Development</h3>
              <p className="feature-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div className="homesection2-feature-card">
              <div className="feature-number">04</div>
              <h3 className="feature-title">Career Acceleration</h3>
              <p className="feature-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
