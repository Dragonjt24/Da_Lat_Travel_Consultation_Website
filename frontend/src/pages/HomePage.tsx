import Header from "../components/UserHeader";
import Footer from "../components/UserFooter";
import "../styles/UserPage.css";

type Destination = {
  title: string;
  rating: string;
  period: string;
  image: string;
  description: string;
  badge: string;
  location: string;
};

const destinations: Destination[] = [
  {
    title: "Thung Lũng Tình Yêu",
    rating: "4.8",
    period: "1 Ngày 0 Đêm",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    description: "Hành trình khám phá Đà Lạt thơ mộng 1 ngày.",
    badge: "Thiên nhiên",
    location: "Đà Lạt, Lâm Đồng",
  },
  {
    title: "Đồi Chè Cầu Đất",
    rating: "4.7",
    period: "2 Ngày 1 Đêm",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    description: "Trải nghiệm thiên nhiên đặc trưng vùng cao nguyên.",
    badge: "Thiên nhiên",
    location: "Đà Lạt, Lâm Đồng",
  },
  {
    title: "Thác Datanla",
    rating: "4.6",
    period: "3 Ngày 2 Đêm",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80",
    description: "Khám phá điểm đến nổi bật và hấp dẫn tại Đà Lạt.",
    badge: "Giải trí",
    location: "Đà Lạt, Lâm Đồng",
  },
  {
    title: "Chùa Linh Phước",
    rating: "4.9",
    period: "1 Ngày 0 Đêm",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    description: "Điểm đến văn hóa nổi bật với kiến trúc độc đáo.",
    badge: "Văn hóa",
    location: "Đà Lạt, Lâm Đồng",
  },
  {
    title: "Hồ Tuyền Lâm",
    rating: "4.8",
    period: "2 Ngày 1 Đêm",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=80",
    description: "Không gian hồ nước yên bình, thích hợp nghỉ dưỡng.",
    badge: "Nghỉ dưỡng",
    location: "Đà Lạt, Lâm Đồng",
  },
  {
    title: "Chợ Đêm Đà Lạt",
    rating: "4.5",
    period: "1 Ngày 0 Đêm",
    image:
      "https://images.unsplash.com/photo-1505232070786-2d5b1c1f4f7f?auto=format&fit=crop&w=900&q=80",
    description: "Trải nghiệm ẩm thực và không khí sôi động về đêm.",
    badge: "Ẩm thực",
    location: "Đà Lạt, Lâm Đồng",
  },
];

function DestinationCard({ item }: { item: Destination }) {
  return (
    <article className="place-card">
      <div className="place-image-wrap">
        <img className="place-image" src={item.image} alt={item.title} />
      </div>

      <div className="place-content">
        <div className="place-topline">
          <span className="place-category">{item.badge}</span>
          <span className="place-rating-badge">⭐ {item.rating}</span>
        </div>

        <h3 className="place-title">{item.title}</h3>
        <p className="place-location">{item.location}</p>

        <div className="place-tag">{item.period}</div>

        <p className="place-description">{item.description}</p>

        <button className="place-action-btn">Xem lịch trình chi tiết</button>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-main">
        <section
          className="hero-section"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.42), rgba(15, 23, 42, 0.42)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="container hero-inner">
            <h1 className="hero-title">Khám phá Đà Lạt cùng tính năng AI tư vấn</h1>
            <p className="hero-subtitle">
              Lên kế hoạch du lịch cá nhân hóa hoàn toàn miễn phí chỉ trong vài giây.
            </p>

            <div className="search-bar">
              <div className="search-main">
                <span className="search-icon">⌕</span>
                <input
                  type="text"
                  placeholder="Tìm địa điểm, món ăn, khu vực..."
                  className="search-input"
                />
              </div>

              <div className="search-location">
                <span className="search-pin">📍</span>
                <span>Tất cả khu vực</span>
              </div>

              <button className="btn btn-primary search-btn">Tìm kiếm</button>
            </div>
          </div>
        </section>

        <section className="container home-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Điểm Đến Phổ Biến</h2>
              <p className="section-subtitle-secondary">
                Những điểm tham quan nổi bật không thể bỏ lỡ tại Đà Lạt
              </p>
            </div>

            <a href="/kham-pha" className="section-link">
              Xem tất cả →
            </a>
          </div>

          <div className="cards-grid">
            {destinations.map((item) => (
              <DestinationCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="container ai-banner">
          <div className="ai-banner-content">
            <h3 className="ai-banner-title">
              Bạn chưa biết đi đâu? Trò chuyện cùng AI
            </h3>
            <p className="ai-banner-desc">
              Hãy nói cho trợ lý AI biết ngân sách, sở thích và thời gian của bạn.
              AI sẽ lập tức thiết kế một hành trình hoàn hảo dành riêng cho bạn.
            </p>
            <button className="btn btn-primary ai-banner-btn">
              Bắt đầu trò chuyện ngay
            </button>
          </div>

          <div className="ai-banner-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
              alt="AI assistant"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}