// src/components/Sidebar.jsx
import React from "react";
import "../styles/sidebar.css";
import faktzLogo from "../assets/faktz_logo.png";
import { FiHome, FiSearch, FiUsers, FiUser } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ activeItem, onNavClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Adjust the `path` values below to match your actual routes
  const navItems = [
    { key: "home", label: "Home", icon: <FiHome />, path: "/app" },
    { key: "analyze", label: "Analyze", icon: <FiSearch />, path: "/analyze" },
    { key: "community", label: "Community", icon: <FiUsers />, path: "/community" },
    { key: "profile", label: "Profile", icon: <FiUser />, path: "/profile" },
  ];

  const handleClick = (item) => {
    navigate(item.path);
    if (onNavClick) onNavClick(item.key);
  };

  const isRouteActive = (path) => {
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <aside className="sidebar">
      {/* Logo section */}
      <div className="sidebar-logo-section">
        <div className="sidebar-logo-content">
          <div className="sidebar-logo-icon" aria-hidden="true">
            <img
              src={faktzLogo}
              alt="Faktz logo"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <span className="sidebar-logo-text">Faktz</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav" aria-label="Main navigation">
        <ul className="sidebar-nav-list">
          {navItems.map((item) => {
            // If activeItem prop is passed, it wins; otherwise use route
            const isActive = activeItem
              ? activeItem === item.key
              : isRouteActive(item.path);

            return (
              <li key={item.key} className="sidebar-nav-item">
                <button
                  type="button"
                  className={`sidebar-nav-button${isActive ? " active" : ""}`}
                  data-tooltip={item.label}
                  onClick={() => handleClick(item)}
                >
                  <span className="sidebar-nav-icon">{item.icon}</span>
                  <span className="sidebar-nav-label">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <p className="sidebar-footer-text">
          You're using Faktz beta.
          <br />
          Thanks for helping improve TikTok credibility.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
