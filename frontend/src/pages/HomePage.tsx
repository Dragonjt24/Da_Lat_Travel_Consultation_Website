import React from "react";
import Header from "../components/UserHeader";
import Footer from "../components/UserFooter";

type Destination = {
  title: string;
  rating: string;
  period: string;
  image: string;
  description: string;
  badge: string;
};

const destinations: Destination[] = [
  {
    title: "Thung Lũng Tình Yêu",
    rating: "4.8",
    period: "1 Ngày 0 Đêm",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=80",
    description:
      "Hành trình khám phá Đà Lạt thơ mộng 1 ngày.",
    badge: "Được chọn nhiều nhất",
  },
  {
    title: "Đồi Chè Cầu Đất",
    rating: "4.7",
    period: "2 Ngày 1 Đêm",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    description:
      "Trải nghiệm thiên nhiên đặc trưng vùng cao nguyên.",
    badge: "Được chọn nhiều nhất",
  },
  {
    title: "Thác Datanla",
    rating: "4.6",
    period: "3 Ngày 2 Đêm",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80",
    description:
      "Khám phá điểm đến nổi bật và hấp dẫn tại Đà Lạt.",
    badge: "Được chọn nhiều nhất",
  },
];

function SearchBar() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-3 rounded-full bg-white p-2 shadow-xl ring-1 ring-slate-200 md:flex-row md:items-center md:gap-2">
      <div className="flex flex-1 items-center gap-2 rounded-full px-4 py-3">
        <span className="text-slate-400">⌕</span>
        <input
          type="text"
          placeholder="Tìm địa điểm, món ăn, khu vực..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="flex items-center gap-2 rounded-full px-4 py-3 text-sm text-slate-500 md:min-w-[180px]">
        <span>📍</span>
        <span>Tất cả khu vực</span>
      </div>

      <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
        Tìm kiếm
      </button>
    </div>
  );
}

function DestinationCard({ item }: { item: Destination }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-blue-600 shadow">
          {item.period}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
          <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
            <span>★</span>
            <span>{item.rating}</span>
          </div>
        </div>

        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {item.badge}
        </span>

        <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Điểm đến nổi bật: Hồ Tuyền Lâm, Cà phê Đồi Chè</li>
          <li>• Di chuyển tối ưu theo lịch trình</li>
        </ul>

        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Xem lịch trình chi tiết
        </button>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        {/* Hero */}
        <section
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35), rgba(15,23,42,0.35)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow md:text-6xl">
              Khám phá Đà Lạt cùng AI
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
              Lên kế hoạch du lịch cá nhân hóa hoàn toàn miễn phí chỉ trong vài giây.
            </p>

            <SearchBar />
          </div>
        </section>

        {/* Popular destinations */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Điểm Đến Phổ Biến
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Những điểm tham quan nổi bật không thể bỏ lỡ tại Đà Lạt
              </p>
            </div>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
              Xem tất cả →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((item) => (
              <DestinationCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* AI section */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-3xl bg-blue-50 p-6 shadow-sm ring-1 ring-blue-100 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">
                Bạn chưa biết đi đâu? Trò chuyện cùng AI
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Hãy nói cho trợ lý AI biết ngân sách, sở thích và thời gian của bạn.
                AI sẽ lập tức thiết kế một hành trình hoàn hảo dành riêng cho bạn.
              </p>
              <button className="mt-6 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Bắt đầu trò chuyện ngay
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 p-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                  alt="AI assistant"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}