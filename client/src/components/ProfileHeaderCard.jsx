// src/components/ProfileHeaderCard.jsx
import "../styles/profileheader.css";

const ProfileHeaderCard = ({
  userInitial = "O",
  userName = "Omar",
  isProfessional = true,
  bio = "Content creator passionate about fact-checking and media literacy.",
  stats = { posts: 2, analyses: 3, followers: 8, following: 4 },
  onEditProfile, // NEW
}) => {
  return (
    <div className="ph-card">
      <div className="ph-left">
        <div className="ph-avatar">{userInitial}</div>

        <div className="ph-meta">
          <div className="ph-name-row">
            <h2 className="ph-name">{userName}</h2>
            {isProfessional && <span className="ph-badge">Professional</span>}
          </div>

          <p className="ph-bio">{bio}</p>

          <div className="ph-stats">
            <div className="ph-stat-box">
              <span className="ph-stat-value">{stats.posts}</span>
              <span className="ph-stat-label">Posts</span>
            </div>

            <div className="ph-divider" />

            <div className="ph-stat-box">
              <span className="ph-stat-value">{stats.analyses}</span>
              <span className="ph-stat-label">Analyses</span>
            </div>

            <div className="ph-divider" />

            <div className="ph-stat-box">
              <span className="ph-stat-value">{stats.followers}</span>
              <span className="ph-stat-label">Followers</span>
            </div>

            <div className="ph-divider" />

            <div className="ph-stat-box">
              <span className="ph-stat-value">{stats.following}</span>
              <span className="ph-stat-label">Following</span>
            </div>
          </div>
        </div>
      </div>

      {/* OPEN EDIT MODAL */}
      <button className="ph-edit-btn" onClick={onEditProfile}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeaderCard;
