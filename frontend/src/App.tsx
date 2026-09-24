import { Navigate, Route, Routes } from "react-router-dom"; // Import các thành phần điều hướng của React Router.
import HomePage from "./pages/HomePage"; // Import trang chủ của website.
import AuthPage from "./pages/AuthPage"; // Import trang đăng nhập / đăng ký.

// Khai báo component App là điểm ghép toàn bộ route của ứng dụng.
export default function App() {
  return ( // Bắt đầu phần render giao diện.
    <Routes> {/* Bọc toàn bộ các tuyến đường (route) của ứng dụng. */}

      <Route path="/" element={<HomePage />} /> {/* Trang chủ khi vào root "/". */}

      <Route path="/auth/:mode" element={<AuthPage />} /> {/* Hiển thị form theo mode: login hoặc register. */}

      <Route path="*" element={<Navigate to="/" replace />} /> {/* Điều hướng mọi URL không hợp lệ về trang chủ. */}

    </Routes> // Kết thúc danh sách route.
  ); // Kết thúc return.
} // Kết thúc component App.