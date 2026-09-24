import { useNavigate } from "react-router-dom"; // Dùng để chuyển sang form đăng ký khi bấm gói Free.
import Header from "../components/Header"; // Import Header tách riêng.
import Footer from "../components/Footer"; // Import Footer tách riêng.
import "../styles/HomePage.css"; // Import CSS cho trang HomePage.

// Kiểu dữ liệu cho card nội dung.
type FeatureCard = {
  title: string; // Tiêu đề card.
  description: string; // Mô tả card.
  icon: string; // Icon hiển thị trên card.
}; // Kết thúc kiểu dữ liệu.

// Danh sách card của phần Khám phá.
const exploreItems: FeatureCard[] = [
  {
    title: "Danh lam thắng cảnh",
    description: "Khám phá những địa danh nổi tiếng và cảnh đẹp đặc trưng của Đà Lạt.",
    icon: "🏞",
  },
  {
    title: "Quán cà phê đẹp",
    description: "Tìm những quán cà phê có view đẹp, phù hợp check-in và thư giãn.",
    icon: "☕",
  },
  {
    title: "Homestay & lưu trú",
    description: "Gợi ý nơi ở phù hợp với nhu cầu nghỉ ngơi, tiện nghi và ngân sách.",
    icon: "🏡",
  },
  {
    title: "Đồi săn mây",
    description: "Tổng hợp các điểm săn mây, đón bình minh và ngắm cảnh trên cao.",
    icon: "☁️",
  },
]; // Kết thúc danh sách Khám phá.

// Danh sách card của phần Trải nghiệm.
const experienceItems: FeatureCard[] = [
  {
    title: "Khách du lịch",
    description: "Xem chi tiết địa điểm, tạo lịch trình, lưu yêu thích và nhận tư vấn từ chatbox AI.",
    icon: "🧭",
  },
  {
    title: "Chủ sở hữu",
    description: "Đăng ký tài khoản, quản lý nhiều địa điểm và cập nhật thông tin tập trung trên một nền tảng.",
    icon: "🏪",
  },
]; // Kết thúc danh sách Trải nghiệm.

// Danh sách gói dịch vụ.
const pricingPlans = [
  {
    name: "Bản cơ bản",
    price: "Miễn phí",
    description: "Dành cho khách du lịch sau khi đăng ký tài khoản.",
    features: ["Tra cứu thông tin cơ bản", "Lưu địa điểm yêu thích", "Giới hạn token hỏi AI"],
    highlight: false,
    actionLabel: "Đăng ký miễn phí", // Nhãn nút cho gói Free.
    actionTarget: "/auth/register", // Chuyển đến form đăng ký.
  },
  {
    name: "Bản Pro",
    price: "Có trả phí",
    description: "Dành cho khách du lịch cần tư vấn nâng cao.",
    features: ["Tư vấn chi tiết hơn", "Đề xuất thông minh hơn", "Token AI gấp 5 lần bản free"],
    highlight: true,
    actionLabel: "Liên hệ nâng cấp", // Nút tham khảo cho gói Pro.
    actionTarget: "/auth/register", // Có thể đổi sang trang thanh toán sau này.
  },
  {
    name: "Dành cho chủ sở hữu",
    price: "Có trả phí",
    description: "Dành cho chủ khu du lịch và đơn vị kinh doanh.",
    features: ["Quản lý nhiều địa điểm", "Đăng tin & theo dõi dữ liệu", "Đăng ký bản quyền khu du lịch"],
    highlight: false,
    actionLabel: "Đăng ký quản lý", // Nút cho chủ sở hữu.
    actionTarget: "/auth/register", // Có thể đổi sang flow riêng sau.
  },
]; // Kết thúc danh sách gói dịch vụ.

// Khai báo component HomePage.
export default function HomePage() {
  const navigate = useNavigate(); // Tạo hàm điều hướng khi bấm nút gói Free.

  return (
    <div className="home-page" id="home"> {/* Root của trang HomePage. */}
      <Header /> {/* Hiển thị thanh điều hướng. */}

      <main className="home-page__main"> {/* Nội dung chính của trang. */}
        <section className="hero"> {/* Phần banner đầu trang. */}
          <div className="hero__overlay"> {/* Lớp phủ để chữ nổi bật trên ảnh. */}
            <div className="hero__content"> {/* Nội dung hero ở giữa. */}
              <p className="hero__eyebrow">DaLat Travel</p> {/* Dòng nhãn nhỏ. */}
              <h1 className="hero__title">Khám phá Đà Lạt cùng AI tư vấn</h1> {/* Tiêu đề chính. */}
              <p className="hero__subtitle">Lên kế hoạch du lịch cá nhân hóa hoàn toàn miễn phí chỉ trong vài giây</p> {/* Mô tả ngắn. */}
              <div className="hero__actions"> {/* Nhóm nút hành động. */}
                <a href="#gia-ca" className="hero__button hero__button--primary">Xem gói dịch vụ</a> {/* Cuộn đến phần giá. */}
                <a href="#ai-tu-van" className="hero__button hero__button--secondary">Thử AI tư vấn</a> {/* Cuộn đến phần AI. */}
              </div> {/* Kết thúc nhóm nút. */}
            </div> {/* Kết thúc nội dung hero. */}
          </div> {/* Kết thúc overlay. */}
        </section> {/* Kết thúc hero. */}

        <section className="section" id="gioi-thieu"> {/* Phần Giới thiệu. */}
          <div className="section__container"> {/* Khung căn giữa nội dung. */}
            <div className="section__header"> {/* Khối tiêu đề section. */}
              <p className="section__label">Giới thiệu</p> {/* Nhãn section. */}
              <h2 className="section__title">Nền tảng tư vấn du lịch thông minh dành riêng cho Đà Lạt</h2> {/* Tiêu đề section. */}
            </div> {/* Kết thúc header. */}

            <div className="section__card section__card--wide"> {/* Card nội dung giới thiệu. */}
              <p className="section__text">
                DaLat Travel là một website tư vấn du lịch thông minh dành riêng cho du lịch Đà Lạt, giúp người dùng dễ dàng khám phá điểm đến, lên kế hoạch chuyến đi và nhận gợi ý cá nhân hóa theo nhu cầu thực tế. Website được xây dựng với mục tiêu mang đến trải nghiệm tra cứu nhanh, trực quan và hiện đại cho cả khách du lịch lẫn chủ sở hữu khu du lịch.
              </p> {/* Nội dung mô tả. */}
            </div> {/* Kết thúc card. */}
          </div> {/* Kết thúc container section. */}
        </section> {/* Kết thúc giới thiệu. */}

        <section className="section section--alt" id="kham-pha"> {/* Phần Khám phá. */}
          <div className="section__container"> {/* Khung nội dung. */}
            <div className="section__header"> {/* Khối tiêu đề. */}
              <p className="section__label">Khám phá</p> {/* Nhãn section. */}
              <h2 className="section__title">Những địa điểm nổi bật tại Đà Lạt</h2> {/* Tiêu đề section. */}
              <p className="section__description">
                Tổng hợp các điểm du lịch, quán cà phê, homestay, khu vui chơi và những nơi check-in hấp dẫn để người dùng tìm nhanh theo sở thích.
              </p> {/* Mô tả section. */}
            </div> {/* Kết thúc header section. */}

            <div className="feature-grid"> {/* Lưới card khám phá. */}
              {exploreItems.map((item) => ( // Duyệt từng card.
                <article key={item.title} className="feature-card"> {/* Card từng địa điểm. */}
                  <div className="feature-card__icon">{item.icon}</div> {/* Icon card. */}
                  <h3 className="feature-card__title">{item.title}</h3> {/* Tiêu đề card. */}
                  <p className="feature-card__text">{item.description}</p> {/* Mô tả card. */}
                </article> // Kết thúc card.
              ))} {/* Kết thúc map. */}
            </div> {/* Kết thúc grid. */}
          </div> {/* Kết thúc container. */}
        </section> {/* Kết thúc khám phá. */}

        <section className="section" id="trai-nghiem"> {/* Phần Trải nghiệm. */}
          <div className="section__container"> {/* Khung nội dung. */}
            <div className="section__header"> {/* Tiêu đề section. */}
              <p className="section__label">Trải nghiệm</p> {/* Nhãn section. */}
              <h2 className="section__title">Tính năng phục vụ cả khách du lịch và chủ sở hữu</h2> {/* Tiêu đề section. */}
            </div> {/* Kết thúc header section. */}

            <div className="experience-grid"> {/* Lưới trải nghiệm. */}
              {experienceItems.map((item) => ( // Duyệt từng khối trải nghiệm.
                <article key={item.title} className="experience-card"> {/* Card trải nghiệm. */}
                  <div className="experience-card__icon">{item.icon}</div> {/* Icon card. */}
                  <h3 className="experience-card__title">{item.title}</h3> {/* Tiêu đề card. */}
                  <p className="experience-card__text">{item.description}</p> {/* Nội dung card. */}
                </article> // Kết thúc card.
              ))} {/* Kết thúc map. */}
            </div> {/* Kết thúc grid. */}
          </div> {/* Kết thúc container. */}
        </section> {/* Kết thúc trải nghiệm. */}

        <section className="section section--alt" id="lich-trinh"> {/* Phần Lịch trình. */}
          <div className="section__container"> {/* Khung nội dung. */}
            <div className="section__header"> {/* Tiêu đề section. */}
              <p className="section__label">Lịch trình</p> {/* Nhãn section. */}
              <h2 className="section__title">Xây dựng kế hoạch rõ ràng theo từng khung thời gian</h2> {/* Tiêu đề section. */}
            </div> {/* Kết thúc header. */}

            <div className="timeline-card"> {/* Khối lịch trình. */}
              <div className="timeline-card__item"> {/* Mốc 1. */}
                <span className="timeline-card__time">Theo ngày</span> {/* Nhãn thời gian. */}
                <p className="timeline-card__text">Sắp xếp hành trình theo từng ngày để dễ theo dõi và tối ưu thời gian.</p> {/* Nội dung. */}
              </div> {/* Kết thúc item. */}
              <div className="timeline-card__item"> {/* Mốc 2. */}
                <span className="timeline-card__time">Buổi sáng / chiều</span> {/* Nhãn thời gian. */}
                <p className="timeline-card__text">Tách lịch trình linh hoạt theo buổi để phù hợp thời gian di chuyển và nghỉ ngơi.</p> {/* Nội dung. */}
              </div> {/* Kết thúc item. */}
              <div className="timeline-card__item"> {/* Mốc 3. */}
                <span className="timeline-card__time">Theo giờ</span> {/* Nhãn thời gian. */}
                <p className="timeline-card__text">Lập kế hoạch chi tiết theo từng khung giờ, giúp hạn chế bỏ sót điểm đến quan trọng.</p> {/* Nội dung. */}
              </div> {/* Kết thúc item. */}
            </div> {/* Kết thúc timeline. */}
          </div> {/* Kết thúc container. */}
        </section> {/* Kết thúc lịch trình. */}

        <section className="section" id="ai-tu-van"> {/* Phần AI tư vấn. */}
          <div className="section__container"> {/* Khung nội dung. */}
            <div className="section__header"> {/* Tiêu đề section. */}
              <p className="section__label">AI tư vấn</p> {/* Nhãn section. */}
              <h2 className="section__title">Trợ lý du lịch thông minh hỗ trợ đề xuất và kiểm duyệt</h2> {/* Tiêu đề section. */}
              <p className="section__description">
                AI có thể tư vấn điểm đến, đề xuất lịch trình cá nhân hóa, gợi ý địa điểm phù hợp với nhu cầu và hỗ trợ quản trị, kiểm duyệt nội dung trên hệ thống.
              </p> {/* Mô tả section. */}
            </div> {/* Kết thúc header. */}

            <div className="ai-banner"> {/* Banner giới thiệu AI. */}
              <div className="ai-banner__content"> {/* Phần nội dung bên trái. */}
                <h3 className="ai-banner__title">Chatbox AI du lịch Đà Lạt</h3> {/* Tiêu đề AI. */}
                <p className="ai-banner__text">
                  Hệ thống ghi nhớ sở thích, phân tích nhu cầu và trả về gợi ý gần với mục tiêu chuyến đi của người dùng.
                </p> {/* Mô tả AI. */}
              </div> {/* Kết thúc content AI. */}
              <div className="ai-banner__badge"> {/* Huy hiệu AI. */}
                <span>24/7</span> {/* Trạng thái hỗ trợ liên tục. */}
              </div> {/* Kết thúc badge. */}
            </div> {/* Kết thúc banner AI. */}
          </div> {/* Kết thúc container. */}
        </section> {/* Kết thúc AI tư vấn. */}

        <section className="section section--alt" id="gia-ca"> {/* Phần Giá cả. */}
          <div className="section__container"> {/* Khung nội dung. */}
            <div className="section__header"> {/* Tiêu đề section. */}
              <p className="section__label">Giá cả</p> {/* Nhãn section. */}
              <h2 className="section__title">Nhiều gói dịch vụ phù hợp cho từng nhóm người dùng</h2> {/* Tiêu đề section. */}
            </div> {/* Kết thúc header. */}

            <div className="pricing-grid"> {/* Lưới gói giá. */}
              {pricingPlans.map((plan) => ( // Duyệt qua từng gói.
                <article key={plan.name} className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`}> {/* Card giá. */}
                  <h3 className="pricing-card__name">{plan.name}</h3> {/* Tên gói. */}
                  <div className="pricing-card__price">{plan.price}</div> {/* Giá gói. */}
                  <p className="pricing-card__description">{plan.description}</p> {/* Mô tả gói. */}

                  <ul className="pricing-card__list"> {/* Danh sách tính năng. */}
                    {plan.features.map((feature) => ( // Duyệt tính năng của gói.
                      <li key={feature} className="pricing-card__item">{feature}</li> // Từng tính năng.
                    ))} {/* Kết thúc map. */}
                  </ul> {/* Kết thúc danh sách. */}

                  <button
                    type="button"
                    className="hero__button hero__button--primary"
                    onClick={() => navigate(plan.actionTarget)} // Chuyển sang form đăng ký.
                    style={{ marginTop: "18px", width: "100%" }} // Căn nút full chiều ngang card.
                  >
                    {plan.actionLabel} {/* Nội dung nút. */}
                  </button> {/* Kết thúc nút hành động. */}
                </article> // Kết thúc card.
              ))} {/* Kết thúc map. */}
            </div> {/* Kết thúc grid. */}
          </div> {/* Kết thúc container. */}
        </section> {/* Kết thúc phần giá cả. */}
      </main> {/* Kết thúc main. */}

      <Footer /> {/* Hiển thị footer. */}
    </div> // Kết thúc root.
  ); // Kết thúc return.
} // Kết thúc component.