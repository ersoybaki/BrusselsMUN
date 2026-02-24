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
            Experience Elevates MUN beyond the conference. From institutional
            visits to diplomatic engagement, these are the moments that define
            your journey.
          </p>
        </div>

        <div className="homesection4-events-grid">
          <div className="homesection4-event-card">
            <div className="homesection4-event-image">
              <img src={Upcoming1} alt="MUN Brussels" />
            </div>
            <div className="homesection4-event-content">
              <h3 className="homesection4-event-title">Elevates MUN</h3>
              <p className="homesection4-event-description">
                Join us for four days of intensive diplomacy in our offices.
              </p>
            </div>
          </div>

          <div className="homesection4-event-card">
            <div className="homesection4-event-image">
              <img src={Upcoming2} alt="Visit to European Parliament" />
            </div>
            <div className="homesection4-event-content">
              <h3 className="homesection4-event-title">
                Visit to the Elevates MUN Conference Venue
              </h3>
              <p className="homesection4-event-description">
                During the conference, delegates will have the unique
                opportunity to visit the Elevates MUN conference venue
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
                We're organising a dedicated Embassy Day where you'll meet
                diplomats and staff from key missions in Netherlands
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
