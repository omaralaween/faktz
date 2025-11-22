import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Left side – Footer Links */}
        <div className="footer-links">
          <div className="footer-link-item">
            <div className="footer-link-text">
              <p>Terms</p>
            </div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text">
              <p>Privacy</p>
            </div>
          </div>
          <div className="footer-link-item">
            <div className="footer-link-text">
              <p>Contact</p>
            </div>
          </div>
        </div>

        {/* Center – Social Media Icons */}
        <div className="footer-social-icons">
          <div className="footer-social-icon">
            <FaFacebookF />
          </div>
          <div className="footer-social-icon">
            <FaTwitter />
          </div>
          <div className="footer-social-icon">
            <FaInstagram />
          </div>
        </div>

        {/* Right side – Copyright */}
        <div className="footer-copyright">
          <div className="footer-copyright-text">
            <p>© 2025 Faktz. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
