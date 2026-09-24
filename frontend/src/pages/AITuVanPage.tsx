import Header from "../components/UserHeader";
import Footer from "../components/UserFooter";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

type Recommendation = {
  name: string;
  address: string;
  rating: string;
  image: string;
};

const messages: Message[] = [
  {
    id: 1,
    role: "assistant",
    text:
      "Chào bạn! Tôi có thể giúp gì cho chuyến du lịch Đà Lạt sắp tới của bạn? Hãy chọn gợi ý bên dưới hoặc mô tả trực tiếp sở thích của bạn nhé!",
  },
  {
    id: 2,
    role: "user",
    text:
      "Mình muốn tìm vài quán cafe view đồi thông đẹp, có bán nước uống ngon và khoảng cách gần trung tâm hơn một chút.",
  },
  {
    id: 3,
    role: "assistant",
    text:
      "Tuyệt vời! Theo yêu cầu của bạn, tôi gợi ý 2 quán cafe có view đồi thông cực kỳ đẹp và giá cả hợp lý chỉ cách trung tâm thành phố dưới 4km:\n\n1. Cafe Túi Mơ To - view đồi thông thung lũng sương.\n2. Horizon Coffee - nổi tiếng với phong cảnh rừng thông vô cực.",
  },
];

const quickSuggestions = [
  "Gợi ý địa điểm check-in",
  "Lịch trình 2 ngày",
  "Quán cafe đẹp",
];

const recommendation: Recommendation = {
  name: "Cafe Túi Mơ To",
  address: "Hẻm 31 Sào Nam, P.11, Đà Lạt",
  rating: "4.7",
  image:
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
};

function ChatBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`chat-row ${isUser ? "chat-row-user" : "chat-row-assistant"}`}>
      {!isUser && <div className="chat-avatar">✦</div>}

      <div className={isUser ? "chat-bubble chat-bubble-user" : "chat-bubble chat-bubble-assistant"}>
        {message.text.split("\n").map((line, idx) => (
          <p key={idx} className={idx === 0 ? "chat-line" : "chat-line chat-line-strong"}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function AITuVanPage() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-main ai-page">
        <section className="container ai-layout">
          {/* Cột trái: khung chat */}
          <div className="ai-chat-panel">
            <div className="ai-chat-header">
              <div className="ai-chat-title-wrap">
                <div className="ai-logo">✦</div>
                <div>
                  <h1 className="ai-title">Cố vấn Trải nghiệm Đà Lạt</h1>
                  <p className="ai-status">Đang hoạt động trực tuyến</p>
                </div>
              </div>

              <button className="clear-chat-btn">Xóa hội thoại</button>
            </div>

            <div className="ai-chat-body">
              {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
              ))}
            </div>

            <div className="ai-suggestions">
              {quickSuggestions.map((item) => (
                <button key={item} className="suggestion-chip">
                  {item}
                </button>
              ))}
            </div>

            <div className="ai-input-bar">
              <button className="attach-btn">📎</button>

              <input
                className="ai-input"
                type="text"
                placeholder="Nhập câu hỏi của bạn tại đây..."
              />

              <button className="emoji-btn">☺</button>

              <button className="send-btn">➤</button>
            </div>
          </div>

          {/* Cột phải: gợi ý và bản đồ */}
          <aside className="ai-sidebar">
            <div className="side-card">
              <h3 className="side-card-title">Vị trí gợi ý trên bản đồ</h3>
              <div className="map-preview">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Bản đồ gợi ý"
                />
              </div>
            </div>

            <div className="side-card">
              <h3 className="side-card-title">Địa điểm được AI đề cập</h3>

              <div className="recommend-card">
                <img
                  className="recommend-image"
                  src={recommendation.image}
                  alt={recommendation.name}
                />

                <div className="recommend-content">
                  <h4 className="recommend-name">{recommendation.name}</h4>
                  <p className="recommend-address">{recommendation.address}</p>
                  <div className="recommend-meta">
                    <span className="recommend-rating">⭐ {recommendation.rating}</span>
                    <a href="#" className="recommend-link">
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}