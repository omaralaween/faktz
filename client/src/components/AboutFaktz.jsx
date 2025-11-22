import "../styles/aboutfaktz.css";
import aboutFaktzImage from "../assets/aboutfaktz.png";
import { useNavigate } from "react-router-dom";


export default function AboutFaktz() {
  const navigate = useNavigate();
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Header */}
        <div className="about-header">
          <div className="about-heading-wrapper">
            <div className="about-heading">
              <p>About Faktz</p>
            </div>
            <div className="about-accent-line"></div>
          </div>

          <div className="about-subtitle-wrapper">
            <div className="about-subtitle">
              <p>
                Faktz is built by creators, analysts, and everyday users who believe
                truth deserves a platform.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="about-grid">

          {/* Left side - Visual */}
          <div className="about-visual">
            <img
              src={aboutFaktzImage}
              alt="Faktz Logo and Background"
              className="about-visual-img"
            />
          </div>

          {/* Right side - Content */}
          <div className="about-content">
            <div className="about-paragraph">
              <p>
                We started Faktz with one goal — to make online information trustworthy again.
                Our AI tools and fact-checking community work together to detect misinformation,
                analyze claims, and promote credible voices.
              </p>
              <p>
                Faktz isn't just a platform. It's a movement — where people like you help
                shape a safer digital world.
              </p>
            </div>

            <div className="about-cta-wrapper">
              <button className="about-cta-button" onClick={() => navigate("/auth")}>
                <div className="about-cta-text">
                  <p>Join the Movement</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
