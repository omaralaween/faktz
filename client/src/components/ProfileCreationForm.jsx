// src/components/ProfileCreationForm.jsx
import React, { useState } from "react";
import { FaUpload, FaFileAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileCreationForm = ({ role = "regular" }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState("");
  const [verificationFile, setVerificationFile] = useState(null);

  const navigate = useNavigate();
  const isProfessional = role === "professional";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setProfileImage(null);
  };

  const handleVerificationUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setVerificationFile(file);
  };

  const removeDocument = () => {
    setVerificationFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: send profile data + role to API

    // After successful save, go to the main app home
    navigate("/app");
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {/* Profile Picture */}
      <div className="form-section">
        <label className="section-label">Profile Picture</label>

        <div className="image-upload-section">
          {!profileImage ? (
            <label className="image-upload-box">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="image-input"
                onChange={handleImageUpload}
              />

              <div className="upload-icon-container">
                <FaUpload size={22} />
              </div>

              <div className="upload-text">
                <span className="upload-label">Click to upload</span>
                <span className="upload-hint">PNG, JPG up to 5MB</span>
              </div>
            </label>
          ) : (
            <div className="image-preview-container">
              <img
                src={profileImage}
                alt="Profile Preview"
                className="image-preview"
              />
              <button
                type="button"
                className="remove-image-button"
                onClick={removeImage}
              >
                <FaTimes size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Shared User Fields */}
      <div className="form-group">
        <label className="form-label">
          Username <span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="johndoe123"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Display Name <span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Bio <span className="char-counter">{bio.length}/160</span>
        </label>
        <textarea
          className="form-textarea"
          placeholder="Tell us about yourself..."
          maxLength={160}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label className="form-label">Location</label>
        <input
          type="text"
          className="form-input"
          placeholder="New York, USA"
        />
      </div>

      {/* ======================================================
          PROFESSIONAL SECTION (shown only when role=professional)
         ====================================================== */}
      {isProfessional && (
        <div className="professional-section">
          <div className="professional-divider">
            <span className="divider-text">Professional Information</span>
          </div>

          <div className="form-group">
            <label className="form-label">
              Profession <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Journalist, Researcher, Educator"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Area of Expertise <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Political Science, Climate Change, Health"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Website / Portfolio</label>
            <input
              type="text"
              className="form-input"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className="verification-hint">
            Upload a professional license, work ID, or any document that
            verifies your professional status.
          </div>

          <div className="document-upload-section">
            {!verificationFile ? (
              <label className="document-upload-box">
                <input
                  type="file"
                  accept="application/pdf,image/png,image/jpeg"
                  className="document-input"
                  onChange={handleVerificationUpload}
                />
                <FaUpload size={24} color="#5b1f98" />

                <div className="upload-text">
                  <span className="upload-label">
                    Click to upload verification
                  </span>
                  <span className="upload-hint">
                    PDF, PNG, JPG up to 5MB
                  </span>
                </div>
              </label>
            ) : (
              <div className="document-preview">
                <div className="document-icon">
                  <FaFileAlt size={22} />
                </div>

                <div className="document-info">
                  <div className="document-name">{verificationFile.name}</div>
                  <div className="document-size">
                    {(verificationFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>

                <button
                  type="button"
                  className="document-remove-button"
                  onClick={removeDocument}
                >
                  <FaTimes size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Submit */}
      <button type="submit" className="submit-button">
        Complete Profile
      </button>
    </form>
  );
};

export default ProfileCreationForm;