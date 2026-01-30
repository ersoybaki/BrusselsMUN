"use client";

import "./HomeSection9.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState, useRef } from "react";

import MapImage from "../../../assets/images/Maps.png";

const HomeSection9 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const captchaRef = useRef(null);
  const [botcheck, setBotcheck] = useState("");
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onHCaptchaVerify = (token) => {
    setCaptchaToken(token);
    setShowCaptchaError(false);
  };
  const onHCaptchaExpire = () => setCaptchaToken("");
  const onHCaptchaError = () => setCaptchaToken("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (bots often fill hidden fields)
    if (botcheck) return;

    if (!captchaToken) {
      setShowCaptchaError(true);
      // attempt to scroll captcha into view for UX
      setNotification("Please verify the captcha before submitting.");
      captchaRef.current?.element?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const formEl = e.currentTarget;
      const fd = new FormData(formEl);

      fd.set("firstName", formData.firstName);
      fd.set("lastName", formData.lastName);
      fd.set("email", formData.email);
      fd.set("message", formData.message);

      fd.append("access_key", "84403559-7449-4679-8d7d-902defc44abd");

      fd.append("subject", "New message from BrusselsMUN contact form");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();

      if (data.success) {
        setNotification("Message sent! We’ll get back to you shortly.");
        // Reset
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setCaptchaToken("");
        setShowCaptchaError(false);
        setBotcheck("");
        captchaRef.current?.resetCaptcha?.();
        formEl.reset();
        setTimeout(() => setNotification(""), 4000);
      } else {
        setNotification(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setNotification("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="homesection9">
      <div className="homesection9-container">
        <div className="homesection9-header">
          <p className="homesection9-label">GET IN TOUCH</p>
          <h2 className="homesection9-title">Contact Us</h2>
          <p className="homesection9-description">
            Send us a message about applications, partnerships, press inquiries,
            or anything else. We'll get back to you within one business day.
          </p>
        </div>

        <div className="homesection9-content">
          {/* Left Side - Map */}
          <div className="homesection9-map-container">
            <a
              href="https://maps.app.goo.gl/B4zEKVQuhPqGa1Ed6?g_st=i"
              target="_blank"
              rel="noopener noreferrer"
              className="homesection9-map-link"
            >
              <img
                src={MapImage || "/placeholder.svg"}
                alt="Location Map"
                className="homesection9-map-image"
              />
              <button className="homesection9-open-map-btn">OPEN MAP</button>
            </a>
          </div>

          {/* Right Side - Contact Form */}
          <div className="homesection9-form-container">
            <h3 className="homesection9-form-title">Send a Message</h3>
            <p className="homesection9-form-subtitle">
              Fill up the form and our team will get back to you within 24 hours
            </p>

            <form className="homesection9-form" onSubmit={handleSubmit}>
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
              <div className="homesection9-form-row">
                <div className="homesection9-form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="homesection9-form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="homesection9-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="homesection9-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message in here"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="recaptcha-placeholder" aria-live="polite">
                <HCaptcha
                  ref={captchaRef}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  reCaptchaCompat={false}
                  onVerify={onHCaptchaVerify}
                  onExpire={onHCaptchaExpire}
                  onError={onHCaptchaError}
                />
                {showCaptchaError && (
                  <p className="captcha-error" role="alert">
                    Please verify with hCaptcha before submitting.
                  </p>
                )}
              </div>

              <div className="homesection9-form-actions">
                <button
                  type="submit"
                  className="homesection9-submit-btn"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}{" "}
                </button>
                {notification && (
                  <div
                    className="notification-contactus"
                    role="alert"
                    aria-live="assertive"
                  >
                    {notification}
                  </div>
                )}
              </div>
            </form>
          </div>
          {/* Social Media Links */}
        </div>
        <div className="homesection9-social">
          <a
            href="https://facebook.com/BrusselsMUN"
            target="_blank"
            rel="noopener noreferrer"
            className="homesection9-social-item"
          >
            <svg
              className="homesection9-social-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <div>
              <p className="homesection9-social-label">Follow us</p>
              <p className="homesection9-social-handle">@BrusselsMUN</p>
            </div>
          </a>

          <a
            href="https://twitter.com/BrusselsMUN"
            target="_blank"
            rel="noopener noreferrer"
            className="homesection9-social-item"
          >
            <svg
              className="homesection9-social-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <div>
              <p className="homesection9-social-label">Tweet us</p>
              <p className="homesection9-social-handle">@BrusselsMUN</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/brussels-model-united-nations/?originalSubdomain=be"
            target="_blank"
            rel="noopener noreferrer"
            className="homesection9-social-item"
          >
            <svg
              className="homesection9-social-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <div>
              <p className="homesection9-social-label">Connect with us</p>
              <p className="homesection9-social-handle">@BrusselsMUN</p>
            </div>
          </a>

          <a
            href="https://instagram.com/BrusselsMUN"
            target="_blank"
            rel="noopener noreferrer"
            className="homesection9-social-item"
          >
            <svg
              className="homesection9-social-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1,1 0 0,1 19,6A1,1 0 0,1 18,7A1,1 0 0,1 17,6A1,1 0 0,1 18,5Z" />
            </svg>
            <div>
              <p className="homesection9-social-label">Follow us</p>
              <p className="homesection9-social-handle">@BrusselsMUN</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection9;
