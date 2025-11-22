import "../styles/headerbar.css";

const HeaderBar = ({ userName = "Alex", userInitial = "A" }) => {
  return (
    <header className="header-bar">
      {/* Left: greeting */}
      <div className="header-bar-left">
        <p className="header-greeting">
          Hi, {userName}! <span className="header-wave-emoji">👋</span>
        </p>
      </div>

      {/* Right: avatar / profile entry */}
      <div className="header-bar-right">
        <button
          type="button"
          className="header-avatar-button"
          aria-label={`Open profile menu for ${userName}`}
        >
          <span className="header-avatar-initial">{userInitial}</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
