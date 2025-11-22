// src/pages/RoleSelectionPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBriefcase, FaCheck } from "react-icons/fa";
import "../styles/roleselection.css";
import faktzLogo from "../assets/faktz_logo.png";

const RoleSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      key: "regular",
      title: "Regular User",
      description: "Verify videos, join discussions, and stay informed.",
      icon: <FaUser size={28} />,
    },
    {
      key: "professional",
      title: "Professional",
      description: "Get a verified badge and contribute expert insights.",
      icon: <FaBriefcase size={28} />,
    },
  ];

  const handleContinue = () => {
    if (!selectedRole) return;

    // 👉 Send the selected role to the profile creation page
    navigate("/profile/create", { state: { role: selectedRole } });
  };

  const getSubtitleText = () => {
    if (selectedRole === "regular") {
      return "You’ll create a profile to verify videos and join discussions.";
    }
    if (selectedRole === "professional") {
      return "You’ll set up a professional profile to share expert insights.";
    }
    return "Select your role to personalize your experience.";
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-content">
        {/* Logo */}
        <div className="role-selection-logo-section">
          <div className="role-selection-logo-wrapper">
            <div className="role-selection-logo-icon" aria-hidden="true">
              <img
                src={faktzLogo}
                alt="Faktz logo"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="role-selection-logo-text">Faktz</div>
          </div>
        </div>

        {/* Header */}
        <div className="role-selection-header">
          <h1 className="role-selection-title">Choose how you'll use Faktz</h1>
          <p className="role-selection-subtitle">{getSubtitleText()}</p>
        </div>

        {/* Cards */}
        <div className="role-cards-grid" role="list">
          {roles.map((r) => {
            const isSelected = selectedRole === r.key;
            return (
              <button
                key={r.key}
                role="listitem"
                type="button"
                className={`role-card${isSelected ? " selected" : ""}`}
                aria-pressed={isSelected}
                aria-label={`${r.title} — ${r.description}`}
                onClick={() => setSelectedRole(r.key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedRole(r.key);
                  }
                }}
              >
                {isSelected && (
                  <div className="role-card-checkmark" aria-hidden="true">
                    <FaCheck size={14} color="#ffffff" />
                  </div>
                )}

                <div className="role-card-content">
                  <div className="role-card-icon">{r.icon}</div>
                  <div className="role-card-text">
                    <div className="role-card-title">{r.title}</div>
                    <div className="role-card-description">
                      {r.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue */}
        <div className="role-selection-action">
          <button
            className="role-selection-button"
            disabled={!selectedRole}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>

        <p className="role-selection-footer">
          You can change your role anytime in settings.
        </p>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
