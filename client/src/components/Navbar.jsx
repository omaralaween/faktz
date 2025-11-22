import "../styles/navbar.css";
import logo from "../assets/faktz_logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handles scrolling even if the user isn't on the home page
  const scrollOrNavigate = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      handleScroll(id);
    }
  };

  // Handles "Join Faktz" — always go to Auth page
  const goToAuth = () => {
    navigate("/auth");
  };

  // If user just came from another route with a scroll target
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      const timeout = setTimeout(() => handleScroll(target), 400);
      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <header className="top-navbar">
      <div className="top-navbar-content">
        {/* Logo + Wordmark */}
        <button
          className="navbar-logo-wrapper"
          aria-label="Faktz Home"
          onClick={() => scrollOrNavigate("hero")}
        >
          <div className="navbar-svg-container">
            <img src={logo} alt="Faktz Logo" className="navbar-svg" />
          </div>

          <div className="navbar-heading-container">
            <div className="navbar-heading-text">
              <p className="navbar-heading-p">Faktz</p>
            </div>
          </div>
        </button>

        {/* Center nav */}
        <nav className="navbar-nav" aria-label="Primary">
          <button
            className="navbar-link"
            onClick={() => scrollOrNavigate("how-it-works")}
          >
            How it Works
          </button>
          <button
            className="navbar-link"
            onClick={() => scrollOrNavigate("about")}
          >
            About Us
          </button>
          <button
            className="navbar-link"
            onClick={() => scrollOrNavigate("contact")}
          >
            Contact
          </button>
        </nav>

        {/* CTA */}
        <button className="navbar-button" type="button" onClick={goToAuth}>
          <span className="navbar-button-text-wrapper">
            <p className="navbar-button-text">Join Faktz</p>
          </span>
        </button>
      </div>
    </header>
  );
}
