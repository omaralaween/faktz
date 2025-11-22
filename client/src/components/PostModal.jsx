// src/components/PostModal.jsx
import React, { useEffect } from "react";
import "../styles/postmodal.css";
import {
  FiX,
  FiArrowUp,
  FiArrowDown,
  FiMessageCircle,
  FiRepeat,
} from "react-icons/fi";

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  // Fallbacks so it does not crash if some fields are missing
  const {
    authorName = "Omar",
    authorInitial = "O",
    timeAgo = "1 day ago",
    text = "Breaking down misinformation in viral health claims. Always verify before sharing!",
    score = 34,
    label = "Opinion",
    stats = {},
  } = post;

  const {
    upvotes = 289,
    downvotes = 28,
    comments = 67,
    reposts = 45,
  } = stats;

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Category color helper
  const categoryClass =
    label.toLowerCase() === "supported claim"
      ? "badge-supported"
      : label.toLowerCase() === "claim"
      ? "badge-claim"
      : "badge-opinion";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="post-details-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top modal header */}
        <header className="modal-header">
          <h2 id="post-details-title">Post Details</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close post details"
          >
            <FiX />
          </button>
        </header>

        {/* Scrollable body */}
        <div className="modal-body">
          {/* Post header (avatar + meta) */}
          <div className="modal-post-header">
            <div className="modal-avatar">{authorInitial}</div>
            <div className="modal-post-meta">
              <div className="modal-post-author">{authorName}</div>
              <div className="modal-post-time">{timeAgo}</div>
            </div>
          </div>

          {/* Post text */}
          <p className="modal-post-text">{text}</p>

          {/* Video area */}
          <div className="modal-video-wrapper">
            <div className="modal-video-play">
              <div className="modal-video-play-icon" />
            </div>

            <div className="modal-score-badges">
              <span className="score-pill">{`${score}%`}</span>
              <span className={`category-pill ${categoryClass}`}>{label}</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="modal-stats-row">
            <button type="button" className="modal-stat-btn">
              <FiArrowUp />
              <span>{upvotes}</span>
            </button>
            <button type="button" className="modal-stat-btn">
              <FiArrowDown />
              <span>{downvotes}</span>
            </button>
            <button type="button" className="modal-stat-btn">
              <FiMessageCircle />
              <span>{comments}</span>
            </button>
            <button type="button" className="modal-stat-btn">
              <FiRepeat />
              <span>{reposts}</span>
            </button>
          </div>

          {/* Comments */}
          <section className="modal-comments-section">
            <h3 className="modal-comments-title">Comments</h3>

            <div className="modal-comment-item">
              <div className="modal-comment-avatar">S</div>
              <div className="modal-comment-body">
                <div className="modal-comment-header">
                  <span className="modal-comment-author">Sarah Chen</span>
                  <span className="modal-comment-badge">Professional</span>
                  <span className="modal-comment-time">2h ago</span>
                </div>
                <p className="modal-comment-text">
                  Great analysis! This is exactly the kind of content we need
                  more of.
                </p>
              </div>
            </div>

            <div className="modal-comment-item">
              <div className="modal-comment-avatar">M</div>
              <div className="modal-comment-body">
                <div className="modal-comment-header">
                  <span className="modal-comment-author">Marcus Rivera</span>
                  <span className="modal-comment-time">4h ago</span>
                </div>
                <p className="modal-comment-text">
                  Very helpful breakdown. Thanks for sharing!
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Add comment bar */}
        <div className="modal-add-comment">
          <div className="modal-add-avatar">O</div>
          <input
            type="text"
            placeholder="Add a comment..."
            className="modal-add-input"
          />
          <button type="button" className="modal-add-button">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
