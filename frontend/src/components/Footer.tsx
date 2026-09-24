import "../styles/Footer.css"; // Import CSS cho Footer.

// Khai báo component Footer.
export default function Footer() {
  return ( // Trả về phần chân trang.
    <footer className="footer"> {/* Bao bọc toàn bộ footer. */}
      <div className="footer__container"> {/* Khung nội dung footer. */}
        <div className="footer__brand"> {/* Khối giới thiệu thương hiệu. */}
          <h3 className="footer__title">DaLat Travel</h3> {/* Tên hệ thống. */}
          <p className="footer__text"> {/* Mô tả ngắn cho hệ thống. */}
            Hệ thống cố vấn và lên lịch trình du lịch thông minh, tối ưu trải nghiệm của bạn tại thành phố Đà Lạt bằng AI tư vấn.
          </p> {/* Kết thúc mô tả. */}
        </div> {/* Kết thúc brand. */}

        <div className="footer__grid"> {/* Lưới liên kết footer. */}
          <div className="footer__column"> {/* Cột khám phá. */}
            <h4 className="footer__heading">Khám phá</h4> {/* Tiêu đề cột. */}
            <a href="#kham-pha" className="footer__link">Địa điểm nổi tiếng</a> {/* Link nội bộ. */}
            <a href="#kham-pha" className="footer__link">Ẩm thực đường phố</a> {/* Link nội bộ. */}
            <a href="#kham-pha" className="footer__link">Lưu trú & Homestay</a> {/* Link nội bộ. */}
          </div> {/* Kết thúc cột khám phá. */}

          <div className="footer__column"> {/* Cột hỗ trợ. */}
            <h4 className="footer__heading">Hỗ trợ</h4> {/* Tiêu đề cột. */}
            <a href="#ho-tro" className="footer__link">Điều khoản dịch vụ</a> {/* Link hỗ trợ. */}
            <a href="#ho-tro" className="footer__link">Chính sách bảo mật</a> {/* Link hỗ trợ. */}
            <a href="#ho-tro" className="footer__link">Liên hệ phản hồi</a> {/* Link hỗ trợ. */}
          </div> {/* Kết thúc cột hỗ trợ. */}
        </div> {/* Kết thúc grid footer. */}
      </div> {/* Kết thúc container. */}

      <div className="footer__bottom"> {/* Thanh bản quyền. */}
        <span>© 2026 DaLat Travel. Phát triển bởi Đội ngũ Công nghệ Du lịch Việt Nam.</span> {/* Dòng copyright. */}
      </div> {/* Kết thúc bottom. */}
    </footer> // Kết thúc footer.
  ); // Kết thúc return.
} // Kết thúc component.