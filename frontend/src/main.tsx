import React from "react"; // Import React để dùng JSX trong ứng dụng.
import ReactDOM from "react-dom/client"; // Import API mới để render React lên DOM.
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter để sử dụng route trên trình duyệt.
import App from "./App"; // Import component App làm khung chính của ứng dụng.
import "./index.css"; // Import CSS toàn cục cho toàn bộ website.

// Tạo root React từ phần tử có id="root" trong file HTML.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode> {/* Bật chế độ kiểm tra lỗi và cảnh báo trong môi trường phát triển. */}
    <BrowserRouter> {/* Bọc ứng dụng bằng BrowserRouter để hỗ trợ điều hướng URL. */}
      <App /> {/* Render toàn bộ ứng dụng tại đây. */}
    </BrowserRouter> {/* Kết thúc BrowserRouter. */}
  </React.StrictMode> // Kết thúc StrictMode.
); // Kết thúc render.