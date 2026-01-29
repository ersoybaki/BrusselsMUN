import "./Footer.css";
import MUNLogo from "../../assets/images/MUNLogo.png";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [botcheck, setBotcheck] = useState("");
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (bots often fill hidden fields)
    if (botcheck) return;

    try {
      const formEl = e.currentTarget;
      const fd = new FormData(formEl);

      fd.set("email", formData.email);

      fd.append("access_key", "84403559-7449-4679-8d7d-902defc44abd");

      fd.append("subject", "New subscription from BrusselsMUN footer");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();

      if (data.success) {
        setNotification(
          "You have subscribed successfully! We’ll get back to you shortly.",
        );
        // Reset
        setFormData({ email: "" });
        setBotcheck("");
        formEl.reset();
        setTimeout(() => setNotification(""), 4000);
      } else {
        setNotification(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setNotification("Network error. Please try again.");
    }
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
              {/* CHANGE: Honeypot input (keep hidden via CSS) */}
              <input
                type="text"
                name="botcheck"
                className="hp"
                tabIndex={-1}
                autoComplete="off"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                placeholder="Email"
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
              {notification && (
                <div
                  className="notification-footer"
                  role="alert"
                  aria-live="assertive"
                >
                  {notification}
                </div>
              )}
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
                <a href="/conference-2026" className="footer-link">
                  2026 Conference
                </a>
                <a href="/media" className="footer-link">
                  Media
                </a>
                <a href="/contact" className="footer-link">
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
