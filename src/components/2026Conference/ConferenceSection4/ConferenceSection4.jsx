import "./ConferenceSection4.css";
import ParlimentImage from "../../../assets/images/ParlimentBuilding.png";

export default function ConferenceSection4() {
  return (
    <section className="conference-section-4">
      <div className="conference-section-4__container">
        <div className="conference-section-4__image-wrapper">
          <img
            src={ParlimentImage}
            alt="European Parliament building in Brussels with EU flags"
            className="conference-section-4__image"
          />
        </div>
        <div className="conference-section-4__content">
          <span className="conference-section-4__label">2026 CONFERENCE</span>
          <h2 className="conference-section-4__title">Brussel Experience</h2>
          <p className="conference-section-4__text">
            What sets BrusselsMUN apart isn't just our committees, it's our
            location and the unparalleled access it provides. Delegates gain
            exclusive access to EU institutions where real diplomatic
            negotiations take place daily. Our institutional visits to the
            European Parliament, European Commission, and NATO headquarters
            transform abstract policy discussions into tangible reality. You'll
            hear from Brussels-based experts, policymakers, and diplomats who
            bring real-world context to your debates.
          </p>
          <p className="conference-section-4__text">
            Combined with our international delegate community of 150+
            participants from across Europe, BrusselsMUN offers an immersive
            diplomatic experience that no other conference can match.
          </p>
        </div>
      </div>

      <div className="conference-section-4__stats">
        <div className="conference-section-4__stat">
          <span className="conference-section-4__stat-accent"></span>
          <span className="conference-section-4__stat-number">8+</span>
          <span className="conference-section-4__stat-label">Committees</span>
        </div>
        <div className="conference-section-4__stat">
          <span className="conference-section-4__stat-accent"></span>
          <span className="conference-section-4__stat-number">100+</span>
          <span className="conference-section-4__stat-label">Delegates</span>
        </div>
        <div className="conference-section-4__stat">
          <span className="conference-section-4__stat-accent"></span>
          <span className="conference-section-4__stat-number">35+</span>
          <span className="conference-section-4__stat-label">
            Nationalities
          </span>
        </div>
        <div className="conference-section-4__stat">
          <span className="conference-section-4__stat-accent"></span>
          <span className="conference-section-4__stat-number">20+</span>
          <span className="conference-section-4__stat-label">
            Opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
