import "../styles/authswitchbox.css";

export default function AuthSwitchBox({ activeTab, onSwitch }) {
  return (
    <div className="auth-tabs">
      <div className="auth-tabs-list">
        {/* Log In Tab */}
        <button
          className="auth-tab-trigger"
          data-state={activeTab === "login" ? "active" : "inactive"}
          onClick={() => onSwitch("login")}
        >
          Log In
        </button>

        {/* Sign Up Tab */}
        <button
          className="auth-tab-trigger"
          data-state={activeTab === "signup" ? "active" : "inactive"}
          onClick={() => onSwitch("signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
