import Header from "../components/UserHeader";
import Footer from "../components/UserFooter";

// Dữ liệu ngày trong lịch trình
const days = ["1 Ngày", "2 Ngày", "3 Ngày", "4 Ngày +"];

// Dữ liệu thói quen / sở thích
const preferences = [
  { label: "Cắm trại rừng thông", active: false },
  { label: "Check-in cafe", active: true },
  { label: "Ẩm thực đường phố", active: true },
  { label: "Khám phá thác nước", active: false },
];

// Dữ liệu từng hoạt động trong lịch trình
const itineraryDays = [
  {
    dayTitle: "Ngày 1: Thiên nhiên vẫy gọi",
    items: [
      {
        time: "08:30 AM",
        title: "Cắm trại & đón sương tại Hồ Tuyền Lâm",
        description:
          "Tận hưởng không khí mát mẻ buổi sáng và chụp những bức hình đẹp quanh hồ nước rộng nhất Đà Lạt.",
        transit: "Di chuyển tiếp theo: 15 phút (xe máy)",
        linkText: "Xem bản đồ tuyến đường",
        dotClass: "dot-blue",
      },
      {
        time: "11:30 AM",
        title: "Thưởng thức lẩu gà lá é Tao Ngộ",
        description:
          "Món đặc sản ấm nóng không thể bỏ qua, nằm ngay gần trung tâm bờ hồ Xuân Hương.",
        transit: "",
        linkText: "",
        dotClass: "dot-green",
      },
    ],
  },
  {
    dayTitle: "Ngày 2: Check-in cổ kính",
    items: [
      {
        time: "08:30 AM",
        title: "Cắm trại & đón sương tại Hồ Tuyền Lâm",
        description:
          "Tận hưởng không khí mát mẻ buổi sáng và chụp những bức hình đẹp quanh hồ nước rộng nhất Đà Lạt.",
        transit: "Di chuyển tiếp theo: 15 phút (xe máy)",
        linkText: "Xem bản đồ tuyến đường",
        dotClass: "dot-blue",
      },
      {
        time: "11:30 AM",
        title: "Thưởng thức lẩu gà lá é Tao Ngộ",
        description:
          "Món đặc sản ấm nóng không thể bỏ qua, nằm ngay gần trung tâm bờ hồ Xuân Hương.",
        transit: "",
        linkText: "",
        dotClass: "dot-green",
      },
    ],
  },
];

function TimelineItem({
  time,
  title,
  description,
  transit,
  linkText,
  dotClass,
}: {
  time: string;
  title: string;
  description: string;
  transit: string;
  linkText: string;
  dotClass: string;
}) {
  return (
    <div className="timeline-item">
      <div className={`timeline-dot ${dotClass}`} />
      <div className="timeline-content">
        <div className="timeline-time">{time}</div>
        <h4 className="timeline-title">{title}</h4>
        <p className="timeline-desc">{description}</p>
        {transit && (
          <div className="timeline-transit">
            {transit}{" "}
            <a href="#" className="timeline-link">
              {linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function DayCard({
  dayTitle,
  items,
}: {
  dayTitle: string;
  items: typeof itineraryDays[number]["items"];
}) {
  return (
    <section className="day-card">
      <h3 className="day-card-title">{dayTitle}</h3>

      <div className="timeline-wrap">
        <div className="timeline-line" />
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default function SchedulePage() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-main schedule-page">
        {/* Khối đầu: tùy chỉnh kế hoạch */}
        <section className="container schedule-top">
          <h1 className="schedule-title">Tùy chỉnh kế hoạch của bạn</h1>

          <div className="schedule-form-grid">
            <div className="schedule-days">
              <label className="field-label">Số ngày du lịch</label>
              <div className="days-group">
                {days.map((day, index) => (
                  <button
                    key={day}
                    className={index === 1 ? "day-btn active" : "day-btn"}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="schedule-budget">
              <label className="field-label">Ngân sách tối đa</label>
              <select className="budget-select">
                <option>3,000,000 đ / người</option>
                <option>2,000,000 đ / người</option>
                <option>5,000,000 đ / người</option>
              </select>
            </div>

            <div className="schedule-action">
              <button className="btn btn-primary create-btn">Tạo lịch trình mới</button>
            </div>
          </div>

          <div className="schedule-preferences">
            <span className="prefs-label">Sở thích của bạn:</span>
            <div className="prefs-list">
              {preferences.map((item) => (
                <button
                  key={item.label}
                  className={item.active ? "pref-chip active" : "pref-chip"}
                >
                  {item.label}
                  {item.active && <span className="chip-close">×</span>}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Khối nội dung chính */}
        <section className="container schedule-content">
          {/* Cột trái: lịch trình chi tiết */}
          <div className="schedule-main">
            <div className="section-header">
              <h2>Lịch Trình Chi Tiết: 2 Ngày 1 Đêm</h2>
              <div className="header-actions-inline">
                <button className="outline-btn">🔗 Chia sẻ</button>
                <button className="btn btn-primary small-btn">⬇ Lưu lịch trình</button>
              </div>
            </div>

            {itineraryDays.map((day) => (
              <DayCard key={day.dayTitle} dayTitle={day.dayTitle} items={day.items} />
            ))}
          </div>

          {/* Cột phải: tóm tắt ngân sách và bản đồ */}
          <aside className="schedule-sidebar">
            <div className="side-card">
              <h3 className="side-card-title">Tổng quan ngân sách dự kiến</h3>

              <div className="budget-row">
                <span>Vé tham quan (2 điểm):</span>
                <strong>250,000 đ</strong>
              </div>
              <div className="budget-row">
                <span>Ăn uống (dự tính):</span>
                <strong>450,000 đ</strong>
              </div>
              <div className="budget-row">
                <span>Lưu trú (1 đêm Homestay):</span>
                <strong>500,000 đ</strong>
              </div>

              <div className="budget-total">
                <span>Tổng chi phí tối đa:</span>
                <strong>1,200,000 đ</strong>
              </div>
            </div>

            <div className="side-card map-card">
              <h3 className="side-card-title">Bản đồ lộ trình tối ưu</h3>
              <div className="map-box">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                  alt="Bản đồ lộ trình"
                />
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}