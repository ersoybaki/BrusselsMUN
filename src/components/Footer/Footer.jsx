import "./Footer.css";
import MUNLogo from "../../assets/images/MUNLogo.png";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Email functionality to be implemented
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Newsletter */}
          <div className="footer-newsletter">
            <h2 className="footer-heading">
              Let's collaborate with us and get our newsletter
            </h2>
            <p className="footer-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <form className="footer-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Input your email here"
                className="footer-input"
              />
              <button type="submit" className="footer-submit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Section - Logo & Navigation */}
          <div className="footer-right">
            <div className="footer-logo-section">
              <img
                src={MUNLogo}
                alt="Company Logo"
                className="footer-logo-image"
              />
              <p className="footer-tagline">
                Rethinking Europe in a changing world
              </p>
            </div>

            <nav className="footer-nav">
              <div className="footer-nav-row">
                <a href="/about-us" className="footer-link">
                  About Us
                </a>
                <a href="/2026-conference" className="footer-link">
                  2026 Conference
                </a>
                <a href="/team" className="footer-link">
                  Team
                </a>
                <a href="/contact-us" className="footer-link">
                  Contact Us
                </a>
              </div>
              <div className="footer-nav-row">
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
                <a href="/terms-of-services" className="footer-link">
                  Terms of Services
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            Proudly powered by{" "}
            <a
              href="https://elevates.it"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-elevates-link"
            >
              Elevates
            </a>{" "}
            © 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
