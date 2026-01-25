import "./Hero.css";

export default function Hero({
  title,
  backgroundImage,
  overlayOpacity = 0.5,
  minHeight,
  titleColor = "#ffffff",
}) {
  return (
    <section
      className="hero-banner"
      style={{
        "--hero-min-height": minHeight,
        "--hero-overlay-opacity": overlayOpacity,
        "--hero-title-color": titleColor,
      }}
    >
      <div
        className="hero-banner-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="hero-banner-overlay" />
      <div className="hero-banner-content">
        <h1 className="hero-banner-title">{title}</h1>
      </div>
    </section>
  );
}
