import "./ConferenceSection5.css";
import Conference4 from "../../../assets/images/Placeholders/conference5.jpg";
import Conference5 from "../../../assets/images/Placeholders/conference6.jpg";
import Conference6 from "../../../assets/images/Placeholders/conference7.jpg";

export default function ConferenceSection5() {
  return (
    <section className="conference-section-5">
      <div className="conference-section-5__header">
        <span className="conference-section-5__label">Relive the Moments</span>
        <h2 className="conference-section-5__heading">
          Where Diplomacy becomes <em>Memory</em>
        </h2>
        <p className="conference-section-5__subtitle">
          Relive the moments that defined the conference. Witness the intensity
          of the debate
        </p>
        <a href="https://elevates.it" className="conference-section-5__button">
          Access Google Drive Photos
        </a>
      </div>

      <div className="conference-section-5__gallery">
        <div className="conference-section-5__image-wrapper">
          <img
            src={Conference5}
            alt="Conference presentation in lecture hall"
            className="conference-section-5__image"
          />
        </div>
        <div className="conference-section-5__image-wrapper">
          <img
            src={Conference6}
            alt="Conference group photo"
            className="conference-section-5__image"
          />
        </div>
        <div className="conference-section-5__image-wrapper">
          <img
            src={Conference4}
            alt="Committee session with delegates"
            className="conference-section-5__image"
          />
        </div>
      </div>
    </section>
  );
}
