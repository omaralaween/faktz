import "../styles/seeinaction.css";
import PostCard from "./PostCard";
import { useNavigate } from 'react-router-dom';

export default function SeeInAction() {
    const navigate = useNavigate();
  // Mock posts data (replace later with API fetch)
  const posts = [
    {
      userInitial: "E",
      userName: "Dr. Emily Watson",
      isProfessional: true,
      timeAgo: "2 hours ago",
      score: 91,
      category: "Fact",
      commentary:
        "This is one of the most comprehensive analyses I've seen on renewable energy trends. The creator cites multiple peer-reviewed sources and presents data from reputable institutions. Highly recommend for anyone interested in understanding the current state of climate action.",
      upvotes: 124,
      downvotes: 24,
      comments: 23,
      reposts: 45,
    },
    {
      userInitial: "S",
      userName: "Sarah Chen",
      isProfessional: true,
      timeAgo: "3 hours ago",
      score: 88,
      category: "Fact",
      commentary:
        "This video provides excellent context on climate data. The sources cited are peer-reviewed and the statistics align with IPCC reports. Essential viewing for understanding current trends.",
      upvotes: 124,
      downvotes: 24,
      comments: 23,
      reposts: 45,
    },
    {
      userInitial: "J",
      userName: "Jordan Lee",
      isProfessional: false,
      timeAgo: "4 hours ago",
      score: 68,
      category: "Opinion",
      commentary:
        "While I appreciate the creator's enthusiasm, this video makes several claims without providing sources. Would love to see more evidence to support these points. Still an interesting perspective worth discussing.",
      upvotes: 156,
      downvotes: 16,
      comments: 67,
      reposts: 23,
    },
  ];

  return (
    <section className="faktz-in-action-section" id="seeinaction">
      <div className="faktz-in-action-container">

        {/* Header */}
        <div className="faktz-in-action-header">
          <div className="faktz-in-action-heading-container">
            <div className="faktz-in-action-heading-text">
              <p className="faktz-in-action-heading-p">
                See <span className="faktz-in-action-brand">Faktz</span> in Action
              </p>
            </div>
          </div>

          <div className="faktz-in-action-divider"></div>

          <div className="faktz-in-action-description-container">
            <div className="faktz-in-action-description-text">
              <p className="faktz-in-action-description-p">
                Explore the latest analysis from our community feed.
              </p>
            </div>
          </div>
        </div>

        {/* Feed (dynamic posts) */}
        <div className="faktz-in-action-posts-container">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>

        {/* View More Button */}
        <div className="faktz-in-action-button-container">
          <button
            className="faktz-in-action-button"
            onClick={() => navigate("/auth")}
          >
            <span className="faktz-in-action-button-text-wrapper">
              <p className="faktz-in-action-button-text">View More Posts</p>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
