import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-content-wrapper">

            {/* Heading */}
            <div className="hero-heading-container">
              <div className="hero-heading-text">
                <p className="hero-heading-p">
                  <span className="hero-heading-black">Discover the Truth Behind </span>
                  <span className="hero-heading-purple">TikTok</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="hero-description-container">
              <div className="hero-description-text">
                <p className="hero-description-p-desktop">
                  Join a community dedicated to verifying content and fighting misinformation. 
                  See what's real, together.
                </p>
                {/* Optional mobile lines */}
                <p className="hero-description-p-mobile-first">
                  Join a community dedicated to verifying content and fighting misinformation.
                </p>
                <p className="hero-description-p-mobile-second">
                  See what's real, together.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hero-button-container">
              <button className="hero-button" onClick={() => navigate("/auth")}>
                <span className="hero-button-text-wrapper">
                  <p className="hero-button-text">Start Verifying</p>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
