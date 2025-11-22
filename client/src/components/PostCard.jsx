// src/components/PostCard.jsx
import "../styles/postcard.css";
import PostOptionsMenu from "./PostOptionsMenu";
import { useState, useRef, useEffect } from "react";
import {
  FiMoreVertical,
  FiClock,
  FiArrowUp,
  FiArrowDown,
  FiMessageCircle,
  FiRepeat,
} from "react-icons/fi";

export default function PostCard({
  userInitial = "S",
  userName = "Sarah Chen",
  isProfessional = true,
  timeAgo = "3 hours ago",

  // Video-related props (OPTIONAL)
  score,
  category,

  commentary = "This video provides excellent context...",
  upvotes = 124,
  downvotes = 24,
  comments = 23,
  reposts = 45,

  variant = "full",

  // NEW
  onCardClick,
  onCommentsClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const isCompact = variant === "compact";

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = () => {
    setIsMenuOpen(false);
    alert("Edit post clicked");
  };

  const handleDelete = () => {
    setIsMenuOpen(false);
    alert("Delete post clicked");
  };

  // Score colors
  let scoreClass = "post-score-high";
  if (score < 70) scoreClass = "post-score-medium";
  if (score < 50) scoreClass = "post-score-low";

  const categoryClass =
    category === "Fact"
      ? "post-category-badge-fact"
      : category === "Opinion"
      ? "post-category-badge-opinion"
      : category === "Claim"
      ? "post-category-badge-claim"
      : category === "False"
      ? "post-category-badge-false"
      : "post-category-badge-misinformation";

  const hasVideo = score !== undefined && category !== undefined;

  return (
    <article
      className={`post-card ${isCompact ? "post-card-compact" : ""}`}
      onClick={onCardClick}
      role={onCardClick ? "button" : undefined}
      tabIndex={onCardClick ? 0 : undefined}
    >
      <div className="post-content">

        {/* Header */}
        {!isCompact && (
          <div className="post-user-info">
            <div
              className={`post-avatar ${
                isProfessional
                  ? "post-avatar-professional"
                  : "post-avatar-regular"
              }`}
            >
              {userInitial}
            </div>

            <div className="post-user-details">
              <div className="post-user-name-row">
                <span className="post-user-name">{userName}</span>
                {isProfessional && (
                  <span className="post-badge">Professional</span>
                )}
              </div>
              <div className="post-timestamp-row">
                <FiClock className="post-timestamp-icon" />
                <span className="post-timestamp">{timeAgo}</span>
              </div>
            </div>

            {/* Options menu */}
            <div className="post-options" ref={menuRef}>
              <button
                className="post-options-trigger"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <FiMoreVertical className="post-options-trigger-icon" />
              </button>

              {isMenuOpen && (
                <PostOptionsMenu onEdit={handleEdit} onDelete={handleDelete} />
              )}
            </div>
          </div>
        )}

        {/* Video block — ONLY if video props exist */}
        {hasVideo && (
          <div className="post-video">
            <div className="post-play-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="post-play-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            </div>

            <div className="post-video-badges">
              <div className="post-score-badge">
                <span className={`post-score-text ${scoreClass}`}>
                  {score}%
                </span>
              </div>
              <div className={`post-category-badge ${categoryClass}`}>
                {category}
              </div>
            </div>
          </div>
        )}

        {/* Commentary */}
        <p className="post-commentary">{commentary}</p>

        {/* Interactions */}
        {!isCompact && (
          <div className="post-interactions">

            <button className="post-interaction-btn post-interaction-btn-upvote">
              <FiArrowUp />
              <span>{upvotes}</span>
            </button>

            <button className="post-interaction-btn post-interaction-btn-downvote">
              <FiArrowDown />
              <span>{downvotes}</span>
            </button>

            {/* COMMENTS */}
            <button
              className="post-interaction-btn post-interaction-btn-comment"
              onClick={(e) => {
                e.stopPropagation();
                if (onCommentsClick) onCommentsClick();
                else if (onCardClick) onCardClick();
              }}
            >
              <FiMessageCircle />
              <span>{comments}</span>
            </button>

            <button className="post-interaction-btn post-interaction-btn-repost">
              <FiRepeat />
              <span>{reposts}</span>
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
