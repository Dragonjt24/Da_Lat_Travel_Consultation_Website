import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Trang chủ", to: "/" },
  { label: "Khám phá", to: "/kham-pha" },
  { label: "So sánh", to: "/so-sanh" },
  { label: "Lịch trình", to: "/lich-trinh" },
  { label: "AI Tư vấn", to: "/ai-tu-van" },
];

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button
          className="brand"
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
          type="button"
        >
          <span className="brand-icon">F</span>
          <span className="brand-text">DaLat Travel</span>
        </button>

        <nav className="main-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions desktop-actions">
          <button
            className="btn btn-light"
            onClick={() => {
              navigate("/dang-nhap");
              closeMenu();
            }}
            type="button"
          >
            Đăng nhập
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/dang-ky");
              closeMenu();
            }}
            type="button"
          >
            Đăng ký
          </button>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Mở menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className="mobile-menu-line" />
          <span className="mobile-menu-line" />
          <span className="mobile-menu-line" />
        </button>
      </div>

      <div className={isMobileMenuOpen ? "mobile-menu open" : "mobile-menu"}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-auth-actions">
          <button
            className="btn btn-light mobile-auth-btn"
            onClick={() => {
              navigate("/dang-nhap");
              closeMenu();
            }}
            type="button"
          >
            Đăng nhập
          </button>
          <button
            className="btn btn-primary mobile-auth-btn"
            onClick={() => {
              navigate("/dang-ky");
              closeMenu();
            }}
            type="button"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
}