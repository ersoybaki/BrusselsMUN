import { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/MUNLogo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track current path for active state
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Lock body scroll on mobile nav open
  useEffect(() => {
    document.body.style.overflow = click && isMobile ? "hidden" : "auto";
  }, [click, isMobile]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const closeMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  // Check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <div className={`header ${isMobile ? "mobile" : ""}`}>
      {isMobile ? (
        <>
          <a href="/" className="header-title" onClick={scrollToTop}>
            <img src={Logo || "/placeholder.svg"} alt="logo" className="logo" />
          </a>

          <div
            className="mobile-menu-icon"
            onClick={handleClick}
            fill="#004287"
          >
            <div className={`hamburger ${click ? "active" : ""}`}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <a
            href="/contact"
            className={`contact-button ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </a>

          {/* Mobile menu overlay */}
          {click && (
            <div className="mobile-menu-overlay">
              <ul className="nav-menu active" id="page-links">
                <li className="mobile-only-link">
                  <a
                    href="/"
                    className={isActive("/") ? "active" : ""}
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className={isActive("/about-us") ? "active" : ""}
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/conference-2026"
                    className={isActive("/conference-2026") ? "active" : ""}
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                  >
                    2026 Conference
                  </a>
                </li>
                <li>
                  <a
                    href="/media"
                    className={isActive("/media") ? "active" : ""}
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                  >
                    Media
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        // Desktop header
        <>
          <a href="/" className="header-title" onClick={scrollToTop}>
            <img src={Logo || "/placeholder.svg"} alt="logo" className="logo" />
          </a>

          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            id="page-links"
          >
            <li>
              <a
                href="/"
                className={isActive("/") ? "active" : ""}
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className={isActive("/about-us") ? "active" : ""}
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/conference-2026"
                className={isActive("/conference-2026") ? "active" : ""}
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                2026 Conference
              </a>
            </li>
            <li>
              <a
                href="/media"
                className={isActive("/media") ? "active" : ""}
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Media
              </a>
            </li>
          </ul>

          <a
            href="/contact"
            className={`contact-button ${isActive("/contact") ? "active" : ""}`}
            onClick={scrollToTop}
          >
            Contact
          </a>
        </>
      )}
    </div>
  );
};

export default Navbar;
