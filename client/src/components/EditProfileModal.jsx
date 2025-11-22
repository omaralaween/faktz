// src/components/EditProfileModal.jsx
import { useState } from "react";
import "../styles/editprofilemodal.css";
import { FiX, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const EditProfileModal = ({
  open,
  onClose,
  userData = {
    name: "Omar",
    bio: "",
    email: "omar@example.com",
    isProfessional: true,
    initial: "O",
  },
}) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // For password visibility toggles
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  if (!open) return null;

  return (
    <div className="epm-overlay" onClick={onClose}>
      <div
        className="epm-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* HEADER */}
        <div className="epm-header">
          <h2>Edit Profile</h2>
          <button className="epm-close" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* TABS */}
        <div className="epm-tabs">
          <button
            className={`epm-tab ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile Info
          </button>
          <button
            className={`epm-tab ${activeTab === "account" ? "active" : ""}`}
            onClick={() => setActiveTab("account")}
          >
            Account Settings
          </button>
        </div>

        {/* ===================================================
            PROFILE INFO TAB
        =================================================== */}
        {activeTab === "profile" && (
          <div className="epm-tab-content">
            <div className="epm-avatar-section">
              <div className="epm-avatar">{userData.initial}</div>
              <button className="epm-change-photo-btn">Change Photo</button>
            </div>

            <div className="epm-field">
              <label>Display Name</label>
              <input type="text" defaultValue={userData.name} />
            </div>

            <div className="epm-field">
              <label>Bio</label>
              <textarea
                maxLength={160}
                placeholder="Tell us about yourself..."
                defaultValue={userData.bio}
              ></textarea>
              <div className="epm-char-count">0 / 160</div>
            </div>

            <div className="epm-switch-row">
              <div className="epm-switch-labels">
                <span className="epm-switch-title">Professional Account</span>
                <span className="epm-switch-subtitle">
                  Display a professional badge on your profile
                </span>
              </div>

              <label className="epm-switch">
                <input type="checkbox" defaultChecked={userData.isProfessional} />
                <span className="epm-slider"></span>
              </label>
            </div>
          </div>
        )}

        {/* ===================================================
            ACCOUNT SETTINGS TAB
        =================================================== */}
        {activeTab === "account" && (
          <div className="epm-tab-content">
            {/* EMAIL */}
            <div className="epm-field">
              <label>Email</label>

              <div className="epm-input-with-button">
                <div className="epm-input-icon">
                  <FiMail />
                </div>

                <input type="email" defaultValue={userData.email} disabled />

                <button className="epm-change-btn">Change</button>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="epm-field">
              <label>Password</label>

              <div className="epm-input-icon-row">
                <FiLock className="epm-lock-icon" />

                <input
                  type="password"
                  placeholder="********"
                  disabled={!isChangingPassword}
                />

                {/* Toggle when editing password */}
                {isChangingPassword && (
                  <button
                    type="button"
                    className="epm-eye-btn"
                    onClick={() => setShowNewPw(!showNewPw)}
                  >
                    {showNewPw ? <FiEyeOff /> : <FiEye />}
                  </button>
                )}
              </div>
            </div>

            {/* Change Password / Cancel */}
            {!isChangingPassword ? (
              <button
                className="epm-change-password"
                onClick={() => setIsChangingPassword(true)}
              >
                Change Password
              </button>
            ) : (
              <>
                <button
                  className="epm-cancel-change"
                  onClick={() => {
                    setIsChangingPassword(false);
                    setShowNewPw(false);
                    setShowConfirmPw(false);
                  }}
                >
                  Cancel password change
                </button>

                {/* New Password */}
                <div className="epm-field">
                  <label>New Password</label>

                  <div className="epm-input-icon-row">
                    <FiLock className="epm-lock-icon" />

                    <input
                      type={showNewPw ? "text" : "password"}
                      placeholder="Enter new password"
                    />

                    <button
                      type="button"
                      className="epm-eye-btn"
                      onClick={() => setShowNewPw(!showNewPw)}
                    >
                      {showNewPw ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div className="epm-field">
                  <label>Confirm New Password</label>

                  <div className="epm-input-icon-row">
                    <FiLock className="epm-lock-icon" />

                    <input
                      type={showConfirmPw ? "text" : "password"}
                      placeholder="Confirm new password"
                    />

                    <button
                      type="button"
                      className="epm-eye-btn"
                      onClick={() => setShowConfirmPw(!showConfirmPw)}
                    >
                      {showConfirmPw ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* FOOTER BUTTONS */}
        <div className="epm-footer">
          <button className="epm-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="epm-save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
