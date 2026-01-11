import "./HomeSection7.css";

const items = [
  {
    name: "Sophia Martinez",
    title: "Lead designer, Avalon",
    image:
      "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
    body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
  },
  {
    name: "Caroline Lee",
    title: "Senior Graphic Designer, Echo",
    image:
      "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
  {
    name: "Tyler Otwell",
    title: "CTO, Apple",
    image:
      "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
    body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
  },
  {
    name: "Jake Harris",
    title: "Thompson Creative",
    image:
      "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
];

const HomeSection7 = () => {
  return (
    <div className="homesection7-container">
      <div className="homesection7-header">
        <div className="homesection7-label">THOUGHTS OF OUR DELEGATES</div>
        <h2 className="homesection7-heading">What Our Delegates Say?</h2>
        <p className="homesection7-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="homesection7-wrapper">
        <div className="homesection7-marquee">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="homesection7-card-wrapper">
              <div className="homesection7-card">
                <div className="homesection7-body">{item.body}</div>
                <div className="homesection7-author">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="homesection7-avatar"
                  />
                  <div className="homesection7-author-info">
                    <div className="homesection7-name">{item.name}</div>
                    <div className="homesection7-title">{item.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="homesection7-wrapper">
        <div className="homesection7-marquee homesection7-marquee-reverse">
          {[...items, ...items].map((item, index) => (
            <div key={`reverse-${index}`} className="homesection7-card-wrapper">
              <div className="homesection7-card">
                <div className="homesection7-body">{item.body}</div>
                <div className="homesection7-author">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="homesection7-avatar"
                  />
                  <div className="homesection7-author-info">
                    <div className="homesection7-name">{item.name}</div>
                    <div className="homesection7-title">{item.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection7;
