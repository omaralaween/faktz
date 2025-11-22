// src/pages/CommunityPage.jsx
import React, { useState } from "react";
import "../styles/community.css";
import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/HeaderBar";
import PostCard from "../components/PostCard";
import PostModal from "../components/PostModal"; // ✅ NEW

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("latest"); 
  const [activePost, setActivePost] = useState(null); // ✅ NEW

  const posts = [
    {
      id: 1,
      userInitial: "D",
      userName: "Dr. Emily Watson",
      isProfessional: true,
      timeAgo: "2 hours ago",
      score: 91,
      category: "Fact",
      commentary:
        "This is one of the most comprehensive analyses I’ve seen on newly emerging trends. The creator cites multiple peer-reviewed sources and presents data from reputable institutions. Highly recommended for anyone interested in understanding the other side of online discourse.",
      upvotes: 287,
      downvotes: 24,
      comments: 45,
      reposts: 19,
    },
    {
      id: 2,
      userInitial: "J",
      userName: "Jordan Lee",
      isProfessional: false,
      timeAgo: "6 hours ago",
      score: 68,
      category: "Opinion",
      commentary:
        "While I appreciate the creator’s enthusiasm, this video mixes several claims without providing sources. Would love to see more citations to support these points. Still an interesting perspective worth discussing.",
      upvotes: 160,
      downvotes: 35,
      comments: 67,
      reposts: 23,
    },
    {
      id: 3,
      userInitial: "S",
      userName: "Sarah Chen",
      isProfessional: true,
      timeAgo: "8 hours ago",
      score: 85,
      category: "Fact",
      commentary:
        "Excellent breakdown of AI ethics and regulation. The video presents balanced perspectives from industry leaders and policymakers. A must-watch for anyone following developments in technology policy.",
      upvotes: 412,
      downvotes: 21,
      comments: 54,
      reposts: 158,
    },
    {
      id: 4,
      userInitial: "M",
      userName: "Marcus Rivera",
      isProfessional: true,
      timeAgo: "9 hours ago",
      score: 79,
      category: "Fact",
      commentary:
        "Really informative deep dive into nutrition science. The creator does a great job explaining complex metabolic processes in an accessible way while maintaining scientific accuracy.",
      upvotes: 308,
      downvotes: 19,
      comments: 51,
      reposts: 67,
    },
    {
      id: 5,
      userInitial: "D",
      userName: "Dr. Michael Torres",
      isProfessional: true,
      timeAgo: "12 hours ago",
      score: 94,
      category: "Fact",
      commentary:
        "As a researcher in this field, I can confirm the accuracy of the data presented here. The methodology is sound and the conclusions are well-supported by current evidence.",
      upvotes: 534,
      downvotes: 30,
      comments: 70,
      reposts: 201,
    },
    {
      id: 6,
      userInitial: "A",
      userName: "Alex Thompson",
      isProfessional: false,
      timeAgo: "18 hours ago",
      score: 71,
      category: "Opinion",
      commentary:
        "Interesting take on current events. While I don’t agree with everything, the creator makes some valid points that deserve consideration and discussion.",
      upvotes: 189,
      downvotes: 40,
      comments: 54,
      reposts: 112,
    },
  ];

  const trendingDiscussions = posts.slice(0, 3);

  const getPostsLabel = () => {
    if (activeTab === "latest") return "Latest Posts";
    if (activeTab === "trending") return "Trending Posts";
    return "Verified Posts";
  };

  return (
    <div className="app-shell-layout">
      <Sidebar activeItem="community" />

      <div className="app-main-column">
        <HeaderBar userName="Alex" userInitial="A" />

        <main className="community-content-area" aria-label="Community discussions feed">
          <div className="community-content-wrapper">
            
            {/* Page Header */}
            <section className="community-header-section">
              <h1 className="community-header-title">Community Feed</h1>
              <p className="community-header-subtitle">
                Explore trending analyses, new discussions, and top voices across Faktz.
              </p>
            </section>

            {/* Tabs */}
            <section className="community-tabs-section" aria-label="Filter community posts">
              <button
                type="button"
                className={`community-tab-button ${activeTab === "latest" ? "active" : ""}`}
                onClick={() => setActiveTab("latest")}
              >
                Latest
              </button>
              <button
                type="button"
                className={`community-tab-button ${activeTab === "trending" ? "active" : ""}`}
                onClick={() => setActiveTab("trending")}
              >
                Trending
              </button>
              <button
                type="button"
                className={`community-tab-button ${activeTab === "verified" ? "active" : ""}`}
                onClick={() => setActiveTab("verified")}
              >
                Verified Insights
              </button>
            </section>

            {/* Trending Slider */}
            <section className="community-section" aria-label="Trending discussions">
              <div className="community-section-header">
                <h2 className="community-section-title">Trending Discussions</h2>
                <span className="community-section-accent" />
              </div>

              <div className="community-trending-slider" role="list">
                {trendingDiscussions.map((discussion) => (
                  <div key={discussion.id} className="community-trending-slide" role="listitem">
                    <PostCard
                      {...discussion}
                      variant="compact"
                      onCardClick={() => setActivePost(discussion)}        // ✅ open modal
                      onCommentsClick={() => setActivePost(discussion)}   // ✅ open modal
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Posts List */}
            <section className="community-section" aria-label="Posts list">
              <div className="community-section-header">
                <h2 className="community-section-title">{getPostsLabel()}</h2>
                <span className="community-section-accent" />
              </div>

              <div className="community-posts-list">
                {posts.map((post) => (
                  <PostCard
                    key={post.id}
                    {...post}
                    onCardClick={() => setActivePost(post)}        // ✅ open modal
                    onCommentsClick={() => setActivePost(post)}   // ✅ open modal
                  />
                ))}
              </div>
            </section>

            {/* Floating Button */}
            <button type="button" className="community-floating-action">
              <span className="community-floating-plus">+</span>
            </button>
          </div>
        </main>
      </div>

      {/* ✅ MODAL RENDERED HERE */}
      <PostModal post={activePost} onClose={() => setActivePost(null)} />
    </div>
  );
};

export default CommunityPage;
