import React from "react";
import { useNavigate, useLocation } from "react-router-dom";   // 🔥 added useLocation
import "../styles/profilecreation.css";
import { FaArrowLeft } from "react-icons/fa";

import faktzLogo from "../assets/faktz_logo.png";
import ProfileCreationForm from "../components/ProfileCreationForm";

const ProfileCreationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();                             // 🔥 get navigation state
  const role = location.state?.role || "regular";             // 🔥 read role

  return (
    <div className="profile-creation-container">
      <div className="profile-creation-wrapper">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft className="back-icon" />
          Back
        </button>

        {/* Logo */}
        <div className="logo-section">
          <div className="logo-content">
            <div className="logo-icon">
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
            <div className="logo-text">Faktz</div>
          </div>
        </div>

        {/* Header */}
        <div className="header-section">
          <h1 className="header-title">Create Your Profile</h1>
          <p className="header-subtitle">
            Tell us a bit about yourself to get started
          </p>
        </div>

        {/* Form Component */}
        <ProfileCreationForm role={role} />   {/* 🔥 FIXED */}
      </div>
    </div>
  );
};

export default ProfileCreationPage;
