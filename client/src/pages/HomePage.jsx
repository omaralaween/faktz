// src/pages/HomePage.jsx
import React, { useState } from "react";
import "../styles/home.css";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import HeaderBar from "../components/HeaderBar";
import PostModal from "../components/PostModal"; // ✅ NEW

const HomePage = () => {
  const [activePost, setActivePost] = useState(null); // ✅ NEW

  const posts = [
    {
      id: 1,
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
      id: 2,
      userInitial: "M",
      userName: "Marcus Rivera",
      isProfessional: false,
      timeAgo: "5 hours ago",
      score: 76,
      category: "Fact",
      commentary:
        "I appreciate the balanced approach here. The creator presents multiple viewpoints while maintaining factual accuracy. More creators should follow this model.",
      upvotes: 89,
      downvotes: 17,
      comments: 17,
      reposts: 31,
    },
    {
      id: 3,
      userInitial: "S",
      userName: "Sarah Chen",
      isProfessional: true,
      timeAgo: "1 day ago",
      score: 62,
      category: "Opinion",
      commentary:
        "Important to note: while this video makes some valid points, the credibility score reflects missing context. Always cross-reference with primary sources.",
      upvotes: 203,
      downvotes: 40,
      comments: 56,
      reposts: 78,
    },
  ];

  return (
    <div className="home-page-layout">
      {/* Sidebar */}
      <Sidebar activeItem="home" />

      {/* Header + main feed */}
      <div className="home-main-column">
        <HeaderBar userName="Alex" userInitial="A" />

        <main className="home-content-area" aria-label="Home feed">
          <div className="home-content-wrapper">

            {/* Header */}
            <section className="feed-header-section">
              <h1 className="feed-header-title">Your Feed</h1>
              <p className="feed-header-subtitle">
                See the latest analyses and discussions from the accounts you follow.
              </p>
            </section>

            {/* Posts */}
            <section className="home-feed-container" aria-label="Latest analyses and discussions">
              <div className="feed-posts-container">
                {posts.map((post, index) => (
                  <div key={post.id} className="feed-post-wrapper">
                    
                    {/* ✅ Add handlers so modal opens */}
                    <PostCard
                      {...post}
                      onCardClick={() => setActivePost(post)}
                      onCommentsClick={() => setActivePost(post)}
                    />

                    {index < posts.length - 1 && (
                      <div className="feed-post-divider" aria-hidden="true"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* ✅ MODAL RENDER */}
      <PostModal post={activePost} onClose={() => setActivePost(null)} />
    </div>
  );
};

export default HomePage;
