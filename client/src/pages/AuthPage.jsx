import "../styles/authpage.css";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../assets/faktz_logo.png";
import LoginForm from "../components/LoginForm";   // ✅ from components
import SignupForm from "../components/SignupForm"; // ✅ from components

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleBackToHome = () => {
    window.location.href = "/"; // You can replace with useNavigate() later
  };

  return (
    <div className="auth-page-container">
      <div className="auth-page-content">
        {/* Back to Home */}
        <button className="auth-back-button" onClick={handleBackToHome}>
          <FiArrowLeft className="auth-back-button-icon" />
          <span>Back to Home</span>
        </button>

        {/* Logo Section */}
        <div className="auth-logo-section">
          <div className="auth-logo-container">
            <div className="auth-logo-icon-wrapper">
              <img src={logo} alt="Faktz Logo" className="auth-logo-svg" />
            </div>
            <h1 className="auth-logo-text">Faktz</h1>
          </div>
          <p className="auth-logo-tagline">
            Join the community verifying truth online
          </p>
        </div>

        {/* Auth Form — toggles between Login and Signup */}
        <div className="auth-form-container">
          {isLogin ? (
            <LoginForm onSwitchToSignUp={() => setIsLogin(false)} />
          ) : (
            <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>

        {/* Footer Text */}
        <p className="auth-footer-text">
          By signing up, you agree to help build a more credible online world.
        </p>
      </div>
    </div>
  );
}
