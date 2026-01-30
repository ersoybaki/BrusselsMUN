import "./ConferenceSection1.css";

export default function ConferenceSection1() {
  return (
    <section className="conference-section-1">
      <div className="conference-section-1__container">
        <span className="conference-section-1__label">
          Message from the Founder
        </span>

        <h2 className="conference-section-1__heading">
          Diplomacy is not just a skill; It is a <em>responsibility</em>.
        </h2>

        <div className="conference-section-1__content">
          <p>
            My Journey started as a high school delegate, struggling with public
            speaking and confidence. Through dedication and MUN conferences, I
            transformed. I proved to myself that anyone can become an expert
            speaker. Today, I'm proud to give you that same opportunity through
            BrusselsMUN.
          </p>
          <p>
            At BrusselsMUN, you don't just simulate diplomacy, you live it. With
            our institutional visits, you'll speak with diplomats and
            ambassadors, visit the institutions you're debating about, and
            connect with passionate delegates from across Europe. This is where
            theory becomes reality.
          </p>
          <p>
            We host only a few events per year, and spaces are limited. If
            you're ready to challenge yourself and discover what you're capable
            of, this is your moment.
          </p>
          <p>I can't wait to see you in Brussels.</p>
        </div>

        <div className="conference-section-1__signature">
          <span className="conference-section-1__signature-name">
            Faris Zobih
          </span>
          <span className="conference-section-1__signature-title">
            Founder & President
          </span>
        </div>
      </div>
    </section>
  );
}
