import { useMemo, useState } from "react";
import Header from "../components/UserHeader";
import Footer from "../components/UserFooter";

// Kiểu dữ liệu cho một địa điểm
type Place = {
  title: string;
  category: string;
  location: string;
  rating: number;
  price: string;
  image: string;
};

// Danh sách dữ liệu mẫu
// Nếu sau này lấy từ API, chỉ cần thay mảng này bằng dữ liệu thật
const places: Place[] = [
  {
    title: "Thung Lũng Tình Yêu",
    category: "Thiên nhiên",
    location: "Mai Anh Đào, P.8",
    rating: 4.8,
    price: "250k đ",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Thác Datanla",
    category: "Giải trí",
    location: "Đèo Prenn, P.3",
    rating: 4.6,
    price: "170k đ",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chùa Linh Phước",
    category: "Văn hóa",
    location: "Tự Phước, Trại Mát",
    rating: 4.9,
    price: "Miễn phí",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Làng Cù Lần",
    category: "Thiên nhiên",
    location: "Lát, Lạc Dương",
    rating: 4.4,
    price: "100k đ",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cối Xay Gió",
    category: "Ẩm thực",
    location: "Khu Hòa Bình, P.1",
    rating: 4.3,
    price: "Tùy chọn",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Homestay Nhà Gió",
    category: "Lưu trú",
    location: "Hùng Vương, P.11",
    rating: 4.7,
    price: "450k đ",
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
  },
];

// Component hiển thị 1 thẻ địa điểm
function ExploreCard({ place }: { place: Place }) {
  return (
    <article className="place-card">
      {/* Ảnh đại diện địa điểm */}
      <div className="place-image-wrap">
        <img className="place-image" src={place.image} alt={place.title} />
      </div>

      {/* Nội dung mô tả địa điểm */}
      <div className="place-content">
        {/* Nhãn danh mục */}
        <span className="place-category">{place.category}</span>

        {/* Tên địa điểm */}
        <h3 className="place-title">{place.title}</h3>

        {/* Vị trí */}
        <p className="place-location">📍 {place.location}</p>

        {/* Thông tin phụ: đánh giá và giá */}
        <div className="place-meta">
          <span className="place-rating">⭐ {place.rating}</span>
          <span className="place-price">{place.price}</span>
        </div>
      </div>
    </article>
  );
}

export default function ExplorePage() {
  // Số lượng địa điểm tối đa trong 1 trang
  const ITEMS_PER_PAGE = 12;

  // Trang hiện tại, bắt đầu từ trang 1
  const [currentPage, setCurrentPage] = useState(1);

  // Tổng số trang, tính theo số địa điểm và số item mỗi trang
  const totalPages = Math.ceil(places.length / ITEMS_PER_PAGE);

  // Cắt dữ liệu theo trang hiện tại
  // Đây chính là phần "1 trang có thể chứa tối đa 12 địa điểm"
  const paginatedPlaces = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return places.slice(startIndex, endIndex);
  }, [currentPage]);

  // Chuyển trang
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="app-shell">
      {/* Header của trang */}
      <Header />

      <main className="page-main">
        {/* Thanh tìm kiếm trên cùng */}
        <section className="container explore-search-row">
          <div className="explore-search-bar">
            <span className="search-icon">⌕</span>
            <input placeholder="Thung Lũng Tình Yêu" className="explore-search-input" />
            <button className="btn btn-primary explore-search-btn">Tìm kiếm</button>
          </div>
        </section>

        {/* Bố cục chính: bộ lọc bên trái, kết quả bên phải */}
        <section className="container explore-layout">
          {/* Khối bộ lọc */}
          <aside className="filter-panel">
            <h2 className="filter-title">Bộ lọc tìm kiếm</h2>

            {/* Bộ lọc khu vực */}
            <div className="filter-group">
              <label className="filter-label">Khu vực</label>
              <select className="filter-select">
                <option>Tất cả các phường</option>
                <option>Phường 1</option>
                <option>Phường 3</option>
                <option>Trại Mát</option>
              </select>
            </div>

            {/* Bộ lọc loại hình */}
            <div className="filter-group">
              <label className="filter-label">Loại hình</label>
              <div className="checkbox-list">
                {["Thiên nhiên", "Ẩm thực", "Văn hóa", "Giải trí", "Lưu trú"].map(
                  (item, index) => (
                    <label key={item} className="check-item">
                      <input type="checkbox" defaultChecked={index === 0} />
                      <span>{item}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Bộ lọc khoảng giá */}
            <div className="filter-group">
              <label className="filter-label">Khoảng giá (VND)</label>
              <div className="range-labels">
                <span>0 đ</span>
                <span>500k đ+</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                defaultValue="250"
                className="range-input"
              />
            </div>

            {/* Bộ lọc đánh giá tối thiểu */}
            <div className="filter-group">
              <label className="filter-label">Đánh giá tối thiểu</label>
              <div className="pill-list">
                {["3 Sao trở lên", "4 Sao trở lên", "5 Sao trở lên"].map(
                  (item, index) => (
                    <button key={item} className={index === 1 ? "pill active" : "pill"}>
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Công tắc đang mở cửa */}
            <div className="toggle-row">
              <label className="filter-label">Đang mở cửa</label>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider" />
              </label>
            </div>
          </aside>

          {/* Khối kết quả tìm kiếm */}
          <section className="results-panel">
            {/* Thanh thông tin phía trên */}
            <div className="results-topbar">
              <p className="results-count">
                Tìm thấy {places.length} kết quả phù hợp
              </p>

              <div className="sort-box">
                <span>Sắp xếp:</span>
                <select className="sort-select">
                  <option>Phổ biến nhất</option>
                  <option>Đánh giá cao nhất</option>
                  <option>Giá thấp nhất</option>
                </select>
              </div>
            </div>

            {/* Danh sách thẻ địa điểm.
                Đây là nơi áp dụng dữ liệu đã phân trang */}
            <div className="cards-grid">
              {paginatedPlaces.map((place) => (
                <ExploreCard key={place.title} place={place} />
              ))}
            </div>

            {/* Phân trang */}
            <div className="pagination">
              <button className="page-btn" onClick={() => goToPage(currentPage - 1)}>
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  className={page === currentPage ? "page-btn active" : "page-btn"}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}

              <button className="page-btn" onClick={() => goToPage(currentPage + 1)}>
                ›
              </button>
            </div>
          </section>
        </section>
      </main>

      {/* Footer của trang */}
      <Footer />
    </div>
  );
}