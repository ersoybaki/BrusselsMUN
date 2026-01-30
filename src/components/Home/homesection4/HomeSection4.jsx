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
                Join us for four days of intensive diplomacy in Europe's
                diplomatic capital. From February 5–8, you'll debate real policy
                challenges across eight committees
              </p>
            </div>
          </div>

          <div className="homesection4-event-card">
            <div className="homesection4-event-image">
              <img src={Upcoming2} alt="Visit to CNDA" />
            </div>
            <div className="homesection4-event-content">
              <h3 className="homesection4-event-title">
                Visit to the European Parliament
              </h3>
              <p className="homesection4-event-description">
                During the conference, you'll step inside the European
                Parliament to see how European democracy actually works. This
                isn't a rushed tour. You'll learn from people who work there,
                understand the legislative process firsthand.
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
                diplomats and staff from key missions in Brussels. Hear directly
                about their work, ask questions about careers in diplomacy.
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
