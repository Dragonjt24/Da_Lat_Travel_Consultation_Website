import React from "react";

const exploreLinks = [
  "Địa điểm nổi tiếng",
  "Ẩm thực đường phố",
  "Lưu trú & Homestay",
];

const supportLinks = [
  "Điều khoản dịch vụ",
  "Chính sách bảo mật",
  "Liên hệ phản hồi",
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2a78] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">DaLat Travel</h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
              Hệ thống tư vấn và lên lịch trình du lịch thông minh, tối ưu trải nghiệm của bạn tại thành phố Đà Lạt bằng AI.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              Khám phá
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              {exploreLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              Hỗ trợ
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-blue-100">
          © 2026 DaLat Travel. Phát triển bởi Đội ngũ Công nghệ Du lịch Việt Nam.
        </div>
      </div>
    </footer>
  );
}