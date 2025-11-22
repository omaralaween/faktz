import "../styles/signupform.css";
import googleIcon from "../assets/google-icon.png";
import AuthSwitchBox from "./AuthSwitchBox";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ onSwitchToLogin }) {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // your signup logic...

      // Redirect user to role selection page
      navigate("/role");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-card">
      {/* Header */}
      <div className="auth-card-header">
        <h2 className="auth-card-title">Welcome to Faktz</h2>
        <p className="auth-card-description">
          Create an account to start contributing
        </p>
      </div>

      {/* Content */}
      <div className="auth-card-content">
        {/* Reusable Animated Switch Box */}
        <AuthSwitchBox
          activeTab="signup"
          onSwitch={(tab) => {
            if (tab === "login") onSwitchToLogin();
          }}
        />

        <div className="auth-signup-content">
          {/* 🔥 Add onSubmit here */}
          <form className="auth-signup-form" onSubmit={handleSignup}>
            {/* Full Name */}
            <div className="auth-form-field">
              <label className="auth-form-label">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="auth-form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="auth-form-field">
              <label className="auth-form-label">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="auth-form-input"
                required
              />
            </div>

            {/* Password */}
            <div className="auth-form-field">
              <label className="auth-form-label">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="auth-form-input"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="auth-form-field">
              <label className="auth-form-label">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="auth-form-input"
                required
              />
            </div>

            {/* Terms */}
            <div className="auth-terms-container">
              <input type="checkbox" className="auth-terms-checkbox" required />
              <label className="auth-terms-label">
                I agree to the{" "}
                <a href="#" className="auth-terms-link">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="auth-terms-link">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="auth-submit-button">
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="auth-divider-container">
            <div className="auth-divider-line-wrapper">
              <div className="auth-divider-line"></div>
            </div>
            <div className="auth-divider-text-wrapper">
              <p className="auth-divider-text">or continue with</p>
            </div>
          </div>

          {/* Google */}
          <div className="auth-google-button-wrapper">
            <button type="button" className="auth-google-button">
              <img
                src={googleIcon}
                alt="Google Icon"
                className="auth-google-icon"
              />
              Continue with Google
            </button>
          </div>

          {/* Login Prompt */}
          <p className="auth-login-prompt">
            Already have an account?{" "}
            <button
              type="button"
              className="auth-login-link"
              onClick={onSwitchToLogin}
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
