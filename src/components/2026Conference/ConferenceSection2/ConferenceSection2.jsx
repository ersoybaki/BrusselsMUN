import "./ConferenceSection2.css";
import Logo1 from "../../../assets/images/SlideImages/International_Criminal_Court_logo.svg.png";
import Logo2 from "../../../assets/images/SlideImages/Logo_UNESCO_2021.svg.png";
import Logo3 from "../../../assets/images/SlideImages/Flag_of_NATO.svg";
import Logo4 from "../../../assets/images/SlideImages/Council_of_the_EU_and_European_Council.svg.png";
import Logo5 from "../../../assets/images/SlideImages/OECD_logo_new.svg.png";
import Logo6 from "../../../assets/images/SlideImages/UN_emblem_blue.svg.png";
import Logo7 from "../../../assets/images/SlideImages/UNHCR-visibility-vertical-Blue-RGB-v2015.jpg";
import Logo8 from "../../../assets/images/SlideImages/United_Nations_Human_Rights_Council_Logo.svg";

const logos = [
  {
    src: Logo1,
    alt: "International Criminal Court",
  },
  {
    src: Logo2,
    alt: "UNESCO",
  },
  {
    src: Logo3,
    alt: "NATO",
  },
  {
    src: Logo4,
    alt: "Council of the EU and European Council",
  },
  {
    src: Logo5,
    alt: "OECD",
  },
  {
    src: Logo6,
    alt: "UN",
  },
  {
    src: Logo7,
    alt: "UNHCR",
  },
  {
    src: Logo8,
    alt: "United Nations Human Rights Council",
  },
];

export default function ConferenceSection2() {
  return (
    <section className="conference-section-2">
      <div className="conference-section-2__slider">
        <div className="conference-section-2__track">
          {logos.map((logo, index) => (
            <div key={index} className="conference-section-2__slide">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="conference-section-2__logo"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless infinite loop */}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="conference-section-2__slide"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="conference-section-2__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
