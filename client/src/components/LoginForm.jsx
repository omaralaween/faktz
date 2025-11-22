import "../styles/loginform.css";
import googleIcon from "../assets/google-icon.png";
import AuthSwitchBox from "./AuthSwitchBox"; // ✅ Import the reusable tab box

export default function LoginForm({ onSwitchToSignUp }) {
  return (
    <div className="auth-card">
      {/* Header */}
      <div className="auth-card-header">
        <h2 className="auth-card-title">Welcome to Faktz</h2>
        <p className="auth-card-description">
          Sign in to continue verifying content
        </p>
      </div>

      {/* Content */}
      <div className="auth-card-content">
        {/* ✅ Reusable Animated Switch Box */}
        <AuthSwitchBox
          activeTab="login"
          onSwitch={(tab) => {
            if (tab === "signup") onSwitchToSignUp();
          }}
        />

        {/* Form */}
        <div className="auth-login-content">
          <form className="auth-login-form">
            {/* Email Field */}
            <div className="auth-form-field">
              <div className="auth-form-label-row">
                <label className="auth-form-label">Email</label>
              </div>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="auth-form-input"
                required
              />
            </div>

            {/* Password Field */}
            <div className="auth-form-field">
              <div className="auth-form-label-row">
                <label className="auth-form-label">Password</label>
                <button type="button" className="auth-forgot-password">
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="auth-form-input"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="auth-submit-button">
              Log In
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

          {/* Google Button */}
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

          {/* Signup Prompt */}
          <p className="auth-signup-prompt">
            Don’t have an account?{" "}
            <button
              type="button"
              className="auth-signup-link"
              onClick={onSwitchToSignUp}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
