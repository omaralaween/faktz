// src/pages/AnalyzePage.jsx
import React, { useState } from "react";
import "../styles/analyze.css";
import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/HeaderBar";
import { FiSearch, FiMessageCircle, FiShare2 } from "react-icons/fi";

const AnalyzePage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  // Mocked result data
  const [score, setScore] = useState(72);
  const [contentType, setContentType] = useState("Supported Claim");

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!videoUrl || isAnalyzing) return;

    setIsAnalyzing(true);
    setHasResult(false);

    // Fake analysis delay
    setTimeout(() => {
      setScore(72);
      setContentType("Supported Claim");
      setIsAnalyzing(false);
      setHasResult(true);
    }, 1200);
  };

  const scoreClass = score >= 70 ? "high" : score >= 50 ? "medium" : "low";

  return (
    <div className="analyze-page-layout">
      {/* Fixed sidebar on the left */}
      <Sidebar activeItem="analyze" />

      {/* Right column: header + page content */}
      <div className="analyze-main-column">
        <HeaderBar userName="Alex" userInitial="A" />

        <main
          className="analyze-content-area"
          aria-label="Analyze TikTok content"
        >
          <div className="analyze-content-wrapper">
            {/* Page heading */}
            <section className="analyze-header-section">
              <h1 className="analyze-header-title">Analyze TikTok Content</h1>
              <p className="analyze-header-subtitle">
                Paste a TikTok video link below to check its credibility and get
                AI-powered insights.
              </p>
            </section>

            {/* Input card */}
            <section
              className="analyze-input-card"
              aria-label="TikTok URL input"
            >
              <form
                className="analyze-input-container"
                onSubmit={handleAnalyze}
              >
                <div>
                  <label
                    htmlFor="tiktok-url"
                    className="analyze-input-label"
                  >
                    TikTok Video URL
                  </label>
                  <input
                    id="tiktok-url"
                    type="url"
                    className="analyze-input-field"
                    placeholder="https://www.tiktok.com/@username/video/..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`analyze-button ${isAnalyzing ? "loading" : ""}`}
                  disabled={!videoUrl || isAnalyzing}
                >
                  {!isAnalyzing && <FiSearch />}
                  {isAnalyzing ? "Analyzing..." : "Analyze Video"}
                </button>
              </form>
            </section>

            {/* Loading state */}
            {isAnalyzing && (
              <div className="analyze-loading-container" aria-live="polite">
                <div className="analyze-loading-spinner" />
                <div className="analyze-loading-text">
                  Running credibility check...
                </div>
                <div className="analyze-loading-subtext">
                  We are extracting the transcript, running the model, and
                  gathering supporting sources.
                </div>
              </div>
            )}

            {/* Empty state */}
            {!isAnalyzing && !hasResult && (
              <section className="analyze-empty-state">
                <div className="analyze-empty-content">
                  <div className="analyze-empty-icon">
                    <FiSearch />
                  </div>
                  <h2 className="analyze-empty-title">No Analysis Yet</h2>
                  <p className="analyze-empty-description">
                    Enter a TikTok video URL above and click “Analyze Video” to
                    get started with AI-powered credibility checking.
                  </p>
                </div>
              </section>
            )}

            {/* Results section */}
            {!isAnalyzing && hasResult && (
              <section
                className="analyze-results-section"
                aria-label="Analysis results"
              >
                <h2 className="analyze-results-title">Analysis Results</h2>

                <div className="analyze-results-card">
                  <div className="analyze-results-content">
                    {/* Left: video thumbnail */}
                    <div className="analyze-video-container">
                      <div className="analyze-video-overlay">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="analyze-video-play-icon"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="8 5 19 12 8 19 8 5" />
                        </svg>
                      </div>
                      <div className="analyze-video-caption">
                        <span className="analyze-video-caption-text">
                          Sample TikTok Video
                        </span>
                      </div>
                    </div>

                    {/* Right: details */}
                    <div className="analyze-details-container">
                      <div className="analyze-details-content">
                        {/* Score */}
                        <div className="analyze-score-section">
                          <div className="analyze-score-header">
                            <span className="analyze-score-title">
                              Confidence Score
                            </span>
                            <span
                              className={`analyze-score-value ${scoreClass}`}
                            >
                              {score}%
                            </span>
                          </div>
                          <div className="analyze-progress-bar">
                            <div
                              className={`analyze-progress-fill ${scoreClass}`}
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>

                        {/* Content type */}
                        <div className="analyze-content-type-section">
                          <div className="analyze-content-type-title">
                            Content Type
                          </div>
                          <div className="analyze-content-type-badges">
                            {["Supported Claim", "Opinion", "Claim"].map(
                              (type) => (
                                <span
                                  key={type}
                                  className={`analyze-badge ${
                                    contentType === type
                                      ? "active"
                                      : "inactive"
                                  }`}
                                >
                                  {type}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        {/* AI analysis text */}
                        <div className="analyze-ai-section">
                          <div className="analyze-ai-title">AI Analysis</div>
                          <div
                            className={`analyze-ai-content ${scoreClass}`}
                          >
                            <p className="analyze-ai-text">
                              This video is supported by the following sources:
                            </p>
                            <ul className="analyze-ai-list">
                              <li className="analyze-ai-list-item">
                                The World Health Organization (WHO).
                              </li>
                              <li className="analyze-ai-list-item">
                                The American Heart Association.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="analyze-actions-section">
                        <button
                          type="button"
                          className="analyze-action-button primary"
                        >
                          <FiMessageCircle />
                          View Discussion
                        </button>
                        <button
                          type="button"
                          className="analyze-action-button secondary"
                        >
                          <FiShare2 />
                          Share to Feed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnalyzePage;
