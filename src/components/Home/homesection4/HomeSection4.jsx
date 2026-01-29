import "./HomeSection4.css";
import Upcoming1 from "../../../assets/images/UpcomingEvents1.png";
import Upcoming2 from "../../../assets/images/UpcomingEvents2.png";
import Upcoming3 from "../../../assets/images/UpcomingEvents3.png";

function HomeSection4() {
  return (
    <section className="homesection4">
      {/* Events Section */}
      <div className="homesection4-events">
        <div className="homesection4-events-header">
          <h2 className="homesection4-events-title">Our Upcoming Events</h2>
          <p className="homesection4-events-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod. Lorem ipsum dolor.
          </p>
        </div>

        <div className="homesection4-events-grid">
          <div className="homesection4-event-card">
            <div className="homesection4-event-image">
              <img src={Upcoming1} alt="MUN Brussels" />
            </div>
            <div className="homesection4-event-content">
              <h3 className="homesection4-event-title">MUN BRUSSELS 2026</h3>
              <p className="homesection4-event-description">
                Engage Model United Nations experts and explore simulated
                international diplomacy. Learn vital debate, exchange and
                discoveries to step into the realm of a diplomat.
              </p>
            </div>
          </div>

          <div className="homesection4-event-card">
            <div className="homesection4-event-image">
              <img src={Upcoming2} alt="Visit to CNDA" />
            </div>
            <div className="homesection4-event-content">
              <h3 className="homesection4-event-title">Visit to the CNDA</h3>
              <p className="homesection4-event-description">
                This visit offers students the opportunity to discover the
                functioning of a real tribunal, a chance to truly understand the
                legal challenges related to asylum.
              </p>
            </div>
          </div>

          <div className="homesection4-event-card">
            <div className="homesection4-event-image">
              <img src={Upcoming3} alt="Embassy Day" />
            </div>
            <div className="homesection4-event-content">
              <h3 className="homesection4-event-title">Embassy Day</h3>
              <p className="homesection4-event-description">
                Our Embassy Day provides an informative visit to the embassies
                of various countries networked by providing exchanges and local
                learnings.
              </p>
            </div>
          </div>
        </div>

        <div className="homesection4-events-button-wrapper">
          <a href="/conference-2026" className="homesection4-discover-button">
            DISCOVER ALL
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection4;
