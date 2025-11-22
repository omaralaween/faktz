import React, { useState } from "react";
import "../styles/profile.css";
import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/HeaderBar";
import PostCard from "../components/PostCard";
import PostModal from "../components/PostModal";
import ProfileHeaderCard from "../components/ProfileHeaderCard";
import EditProfileModal from "../components/EditProfileModal";

const ProfilePage = () => {
  const [activePost, setActivePost] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  // Normal text posts
  const textPosts = [
    {
      id: 1,
      userInitial: "O",
      userName: "Omar",
      isProfessional: true,
      timeAgo: "2 hours ago",
      commentary:
        "Just analyzed a trending video about climate change. The credibility score was 89% — strong sourcing and fact-checking!",
      upvotes: 156,
      downvotes: 15,
      comments: 23,
      reposts: 12,
    },
    {
      id: 2,
      userInitial: "O",
      userName: "Omar",
      isProfessional: true,
      timeAgo: "1 day ago",
      commentary:
        "Breaking down misinformation in viral health claims. Always verify before sharing!",
      upvotes: 289,
      downvotes: 28,
      comments: 67,
      reposts: 45,
    },
  ];

  // Analyses (with video thumbnail)
  const analyses = [
    {
      id: 3,
      userInitial: "O",
      userName: "Omar",
      isProfessional: true,
      timeAgo: "4 hours ago",
      score: 92,
      category: "Fact",
      commentary:
        "Analyzed a trending AI ethics video — excellent sourcing and balanced perspectives!",
      upvotes: 321,
      downvotes: 12,
      comments: 44,
      reposts: 30,
    },
  ];

  // Merge posts + analyses
  const allPosts = [...textPosts, ...analyses];

  return (
    <div className="app-shell-layout">
      <Sidebar activeItem="profile" />

      <div className="app-main-column">
        <HeaderBar userName="Omar" userInitial="O" />

        <main className="profile-content-area">
          <div className="profile-content-wrapper">

            {/* HEADER CARD */}
            <ProfileHeaderCard
              userInitial="O"
              userName="Omar"
              isProfessional={true}
              stats={{
                posts: textPosts.length,
                analyses: analyses.length,
                followers: 8,
                following: 4,
              }}
              onEditProfile={() => setEditOpen(true)} // <-- OPEN MODAL
            />

            {/* POSTS */}
            <div className="profile-posts-list">
              {allPosts.map((post) => (
                <PostCard
                  key={post.id}
                  {...post}
                  onCardClick={() => setActivePost(post)}
                  onCommentsClick={() => setActivePost(post)}
                />
              ))}
            </div>
          </div>
        </main>

        <footer className="profile-footer">
          © 2025 Faktz — Connecting facts and opinions responsibly.
        </footer>
      </div>

      {/* POST MODAL */}
      <PostModal post={activePost} onClose={() => setActivePost(null)} />

      {/* EDIT PROFILE MODAL */}
      <EditProfileModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        userData={{
          name: "Omar",
          bio: "",
          email: "omar@example.com",
          isProfessional: true,
          initial: "O",
        }}
      />
    </div>
  );
};

export default ProfilePage;