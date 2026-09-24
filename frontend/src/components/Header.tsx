import { useState } from "react"; // Dùng để quản lý trạng thái mở/đóng menu mobile.
import { useNavigate } from "react-router-dom"; // Dùng để chuyển trang sang form đăng nhập/đăng ký.
import "../styles/Header.css"; // Import CSS riêng cho Header.

// Khai báo component Header.
export default function Header() {
  const navigate = useNavigate(); // Tạo hàm điều hướng sang trang khác.
  const [isOpen, setIsOpen] = useState(false); // Trạng thái menu mobile: mở hoặc đóng.

  const navItems = [
    { label: "Trang chủ", href: "#home" }, // Điều hướng đến phần hero đầu trang.
    { label: "Giới thiệu", href: "#gioi-thieu" }, // Điều hướng đến phần giới thiệu.
    { label: "Khám phá", href: "#kham-pha" }, // Điều hướng đến phần khám phá.
    { label: "Trải nghiệm", href: "#trai-nghiem" }, // Điều hướng đến phần trải nghiệm.
    { label: "Lịch trình", href: "#lich-trinh" }, // Điều hướng đến phần lịch trình.
    { label: "AI Tư vấn", href: "#ai-tu-van" }, // Điều hướng đến phần AI tư vấn.
    { label: "Giá cả", href: "#gia-ca" }, // Điều hướng đến phần giá cả.
  ]; // Danh sách menu điều hướng.

  const handleLogin = () => {
    navigate("/auth/login"); // Chuyển sang form đăng nhập.
  }; // Kết thúc hàm đăng nhập.

  const handleRegister = () => {
    navigate("/auth/register"); // Chuyển sang form đăng ký.
  }; // Kết thúc hàm đăng ký.

  return (
    <header className="header"> {/* Bao bọc toàn bộ thanh điều hướng. */}
      <div className="header__container"> {/* Khung căn giữa nội dung header. */}
        <a href="#home" className="header__brand"> {/* Logo và tên website. */}
          <div className="header__logo"> {/* Khối logo biểu tượng. */}
            <span className="header__logo-icon">⛰</span> {/* Icon tượng trưng cho Đà Lạt. */}
          </div> {/* Kết thúc khối logo. */}
          <span className="header__brand-text">DaLat Travel</span> {/* Tên thương hiệu. */}
        </a> {/* Kết thúc brand. */}

        <nav className="header__nav"> {/* Menu điều hướng ở desktop. */}
          {navItems.map((item) => ( // Duyệt từng mục trong menu.
            <a key={item.label} href={item.href} className="header__link"> {/* Link từng mục. */}
              {item.label} {/* Hiển thị nội dung menu. */}
            </a> // Kết thúc link.
          ))} {/* Kết thúc vòng lặp navItems. */}
        </nav> {/* Kết thúc nav desktop. */}

        <div className="header__actions"> {/* Nhóm nút thao tác bên phải. */}
          <button
            type="button"
            className="header__button header__button--ghost"
            onClick={handleLogin}
          >
            Đăng nhập {/* Mở form đăng nhập. */}
          </button> {/* Kết thúc nút đăng nhập. */}

          <button
            type="button"
            className="header__button header__button--primary"
            onClick={handleRegister}
          >
            Đăng ký {/* Mở form đăng ký. */}
          </button> {/* Kết thúc nút đăng ký. */}
        </div> {/* Kết thúc actions desktop. */}

        <button
          type="button"
          className="header__toggle"
          onClick={() => setIsOpen((prev) => !prev)} // Đảo trạng thái menu mobile.
          aria-label="Mở menu điều hướng"
        >
          ☰ {/* Icon menu mobile. */}
        </button> {/* Kết thúc nút mobile. */}
      </div> {/* Kết thúc header container. */}

      <div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}> {/* Menu mobile. */}
        {navItems.map((item) => ( // Duyệt các mục menu cho mobile.
          <a
            key={item.label}
            href={item.href}
            className="header__mobile-link"
            onClick={() => setIsOpen(false)} // Chọn xong thì đóng menu.
          >
            {item.label} {/* Nội dung link mobile. */}
          </a> // Kết thúc link mobile.
        ))} {/* Kết thúc vòng lặp menu mobile. */}

        <div className="header__mobile-actions"> {/* Nhóm nút mobile. */}
          <button
            type="button"
            className="header__button header__button--ghost header__button--full"
            onClick={handleLogin}
          >
            Đăng nhập {/* Mở form đăng nhập. */}
          </button> {/* Kết thúc nút login mobile. */}

          <button
            type="button"
            className="header__button header__button--primary header__button--full"
            onClick={handleRegister}
          >
            Đăng ký {/* Mở form đăng ký. */}
          </button> {/* Kết thúc nút register mobile. */}
        </div> {/* Kết thúc actions mobile. */}
      </div> {/* Kết thúc mobile menu. */}
    </header> // Kết thúc header.
  ); // Kết thúc return.
} // Kết thúc component.