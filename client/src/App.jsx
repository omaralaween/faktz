// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import RoleSelectionPage from "./pages/RoleSelectionPage.jsx";
import ProfileCreationPage from "./pages/ProfileCreationPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AnalyzePage from "./pages/AnalyzePage";
import CommunityPage from "./pages/CommunityPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/role" element={<RoleSelectionPage />} />
        <Route path="/profile/create" element={<ProfileCreationPage />} />

        {/* Main app sections */}
        <Route path="/app" element={<HomePage />} />
        <Route path="/analyze" element={<AnalyzePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
