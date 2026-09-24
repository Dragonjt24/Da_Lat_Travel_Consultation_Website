import Header from "../components/UserHeader";
import Footer from "../components/UserFooter";

type ComparePlace = {
  title: string;
  image: string;
  rating: string;
  price: string;
  openTime: string;
  category: string;
  aiPositive: string;
  aiNegative: string;
};

const places: ComparePlace[] = [
  {
    title: "Thung Lũng Tình Yêu",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    rating: "4.8 / 5.0",
    price: "250,000 đ",
    openTime: "07:30 - 17:00",
    category: "Thiên nhiên",
    aiPositive: "Ưu điểm: Đẹp thơ mộng, lãng mạn, nhiều điểm chụp ảnh đẹp.",
    aiNegative: "Nhược điểm: Giá vé tương đối cao so với mặt bằng chung.",
  },
  {
    title: "Thác Datanla",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    rating: "4.6 / 5.0",
    price: "170,000 đ",
    openTime: "07:00 - 17:00",
    category: "Trải nghiệm",
    aiPositive: "Ưu điểm: Phù hợp cho người thích vận động, mạo hiểm.",
    aiNegative: "Nhược điểm: Không phù hợp cho người sợ độ cao hoặc sức khỏe yếu.",
  },
];

function CompareCard({
  item,
  empty = false,
}: {
  item?: ComparePlace;
  empty?: boolean;
}) {
  if (empty) {
    return (
      <div className="compare-empty-card">
        <div className="compare-empty-box">
          <div className="compare-plus">+</div>
          <div className="compare-empty-text">Thêm điểm so sánh</div>
        </div>
        <div className="compare-empty-title">Trống</div>
        <div className="compare-empty-desc">Nhấn nút trên để thêm</div>
      </div>
    );
  }

  if (!item) return null;

  return (
    <div className="compare-place-card">
      <img className="compare-place-image" src={item.image} alt={item.title} />
      <h3 className="compare-place-title">{item.title}</h3>
      <div className="compare-place-rating">⭐ {item.rating}</div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-main compare-page">
        <section className="container compare-header">
          <h1>So sánh các địa điểm</h1>
          <p>
            Đặt các địa điểm lên bàn cân để dễ dàng đưa ra quyết định di chuyển và ngân sách
          </p>
        </section>

        <section className="container compare-table-wrap">
          <div className="compare-table">
            <div className="compare-row compare-row-head">
              <div className="compare-cell compare-label-head">Tiêu chí so sánh</div>
              <div className="compare-cell">
                <CompareCard item={places[0]} />
              </div>
              <div className="compare-cell">
                <CompareCard item={places[1]} />
              </div>
              <div className="compare-cell compare-cell-empty">
                <CompareCard empty />
              </div>
            </div>

            <div className="compare-row">
              <div className="compare-label">Vé tham quan</div>
              <div className="compare-value blue">{places[0].price}</div>
              <div className="compare-value green">{places[1].price}</div>
              <div className="compare-value muted">--</div>
            </div>

            <div className="compare-row">
              <div className="compare-label">Giờ mở cửa</div>
              <div className="compare-value">{places[0].openTime}</div>
              <div className="compare-value">{places[1].openTime}</div>
              <div className="compare-value muted">--</div>
            </div>

            <div className="compare-row">
              <div className="compare-label">Thể loại</div>
              <div className="compare-value">
                <span className="category-pill blue-pill">{places[0].category}</span>
              </div>
              <div className="compare-value">
                <span className="category-pill green-pill">{places[1].category}</span>
              </div>
              <div className="compare-value muted">--</div>
            </div>

            <div className="compare-row compare-row-text">
              <div className="compare-label">Nhận xét từ AI</div>
              <div className="compare-value ai-text">
                <p>• {places[0].aiPositive}</p>
                <p className="negative">• {places[0].aiNegative}</p>
              </div>
              <div className="compare-value ai-text">
                <p>• {places[1].aiPositive}</p>
                <p className="negative">• {places[1].aiNegative}</p>
              </div>
              <div className="compare-value muted">--</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}