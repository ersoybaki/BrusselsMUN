import "./ConferenceSection3.css";
import Conference1 from "../../../assets/images/Conference1.png";
import Conference2 from "../../../assets/images/Conference2.png";
import Conference3 from "../../../assets/images/Conference3.png";

const cards = [
  {
    image: Conference1,
    title: "Diplomacy in Practice",
    description:
      "Explore real negotiation dynamics through case-based sessions and interactive discussions. Learn how diplomacy works beyond theory—under pressure, with trade-offs, and in real time.",
  },
  {
    image: Conference2,
    title: "Next-Gen Leadership",
    description:
      "Build the skills and network needed to lead in international affairs and governance. Meet speakers and peers who can open doors to internships, careers, and collaborations.",
  },
  {
    image: Conference3,
    title: "Governance & Impact",
    description:
      "Turn ideas into policy by focusing on evidence, feasibility, and measurable outcomes. We connect today's European challenges with practical tools to design better decisions.",
  },
];

export default function ConferenceSection3() {
  return (
    <section className="conference-section-3">
      <div className="conference-section-3__container">
        {cards.map((card, index) => (
          <div key={index} className="conference-section-3__card">
            <div className="conference-section-3__image-wrapper">
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                className="conference-section-3__image"
              />
            </div>
            <h3 className="conference-section-3__title">{card.title}</h3>
            <p className="conference-section-3__description">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
