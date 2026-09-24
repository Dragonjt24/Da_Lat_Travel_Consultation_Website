import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import ComparePage from "./pages/ComparePage";
import SchedulePage from "./pages/SchedulePage";
import AITuVanPage from "./pages/AITuVanPage";
import AuthPage from "./pages/AuthPage";
import "./styles/UserPage.css";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kham-pha" element={<ExplorePage />} />
        <Route path="/so-sanh" element={<ComparePage />} />
        <Route path="/lich-trinh" element={<SchedulePage />} />
        <Route path="/ai-tu-van" element={<AITuVanPage />} />
        <Route path="/dang-nhap" element={<AuthPage />} />
        <Route path="/dang-ky" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}