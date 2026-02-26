import "./HomeSection2.css";
import Image from "../../../assets/images/Placeholders/homepage2.jpg";

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
            Elevates MUN brings ambitious students from across the world
            together to experience the thrill of diplomacy. Our mission is to
            empower the next generation of leaders by providing an unparalleled
            platform for learning, networking, and personal growth. Join us in
            shaping a brighter future through the power of Model United Nations.
          </p>

          <div className="homesection2-features">
            <div className="homesection2-feature-card">
              <div className="feature-number">01</div>
              <h3 className="feature-title">Prestige & Credibility</h3>
              <p className="feature-text">
                Build a conference record that is recognised by universities,
                employers, and diplomatic institutions.
              </p>
            </div>

            <div className="homesection2-feature-card">
              <div className="feature-number">02</div>
              <h3 className="feature-title">Networking Opportunities</h3>
              <p className="feature-text">
                Build lasting relationships with peers and professionals from
                across the continent.
              </p>
            </div>

            <div className="homesection2-feature-card">
              <div className="feature-number">03</div>
              <h3 className="feature-title">Skills Development</h3>
              <p className="feature-text">
                Master negotiation, public speaking, and strategic thinking
                through hands-on experience.
              </p>
            </div>

            <div className="homesection2-feature-card">
              <div className="feature-number">04</div>
              <h3 className="feature-title">Career Acceleration</h3>
              <p className="feature-text">
                Accelerate your professional journey and open doors to
                internships and career opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
