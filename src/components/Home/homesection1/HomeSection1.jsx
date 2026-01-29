import "./HomeSection1.css";
import HomePagePhoto1 from "../../../assets/images/HomePagePhoto1.png";

export default function HomeSection1() {
  return (
    <section className="homesection1">
      <div className="homesection1-container">
        <div className="homesection1-content">
          <p className="homesection1-subtitle">STEP INTO DIPLOMACY</p>
          <h1 className="homesection1-title">
            Experience Elite European Democracy
          </h1>
          <p className="homesection1-description">
            Join 100+ delegates at Europe's premier Model United Nations
            conference.
          </p>
          <p className="homesection1-location">
            Hosted at Brussels School of Governance - Feb 5-8, 2026
          </p>
          <div className="homesection1-buttons">
            <a
              href="/contact"
              className="homesection1-btn homesection1-btn-primary"
            >
              APPLY NOW!
            </a>
            <a
              href="/conference-2026"
              className="homesection1-btn homesection1-btn-secondary"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="homesection1-image">
          <img
            src={HomePagePhoto1}
            alt="European Parliament Building with flags"
          />
        </div>
      </div>
      <div className="homesection1-footer">
        <div className="homesection1-footer-logos">
          <img
            src="/vub-brussels-school-of-governance-logo.jpg"
            alt="VUB Brussels School of Governance"
          />
          <img src="/triangle-logo.jpg" alt="Partner Logo" />
          <img src="/generic-company-logo.png" alt="Partner Logo" />
          <img src="/text-logo.jpg" alt="Partner Logo" />
        </div>
      </div>
    </section>
  );
}
