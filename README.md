# 🏔️ Hệ Thống Tư Vấn Du Lịch Đà Lạt (Da_Lat_Travel_Consultation_Website)

---

Danh sách thành viên:

2312677 - Ngô Văn Trường Long - Trưởng nhóm

2312640 - Nguyễn Thế Khải

2314269 - Xuân Vinh Quang


---

## 📌 1. Giới Thệu & Mục Tiêu Đề Tài

**Đà Lạt** là một trong những thành phố du lịch hàng đầu Việt Nam, thu hút hàng triệu lượt khách mỗi năm. Tuy nhiên, việc tìm kiếm thông tin địa điểm phù hợp, sắp xếp lịch trình tối ưu và lựa chọn dịch vụ uy tín vẫn là một thách thức đối với nhiều du khách.

**Dự án Hệ thống tư vấn du lịch tại Đà Lạt** được phát triển nhằm mang đến một giải pháp công nghệ toàn diện và thông minh:
- **Xây dựng ứng dụng Web** hỗ trợ tư vấn thông tin du lịch chuyên sâu tại Đà Lạt.
- **Cung cấp thông tin đa dạng & chính xác** về các địa điểm tham quan, ẩm thực, lưu trú, và trải nghiệm mà khách hàng quan tâm.
- **Nghiên cứu & Tích hợp AI**: Ứng dụng các mô hình Trí tuệ Nhân tạo (AI API) hàng đầu để tư vấn tự động, đề xuất địa điểm thông minh và lập lịch trình du lịch được cá nhân hóa hoàn toàn theo nhu cầu, sở thích, thời gian và ngân sách của du khách.
- **Mục tiêu học thuật & Kỹ năng**: Củng cố các kiến thức nền tảng đã học (Phân tích hệ thống, Lập trình Web, Cơ sở dữ liệu) và trau dồi các công nghệ tiên tiến (AI Integration, Containerization với Docker, UI/UX hiện đại).

---

## ⚙️ 2. Phân Tích Các Yêu Cầu Nghiệp Vụ

Hệ thống được thiết kế và phân chia rõ ràng theo 4 nhóm chức năng cốt lõi:

```
                  ┌─────────────────────────────────────────┐
                  │    HỆ THỐNG TƯ VẤN DU LỊCH ĐÀ LẠT      │
                  └────────────────────┬────────────────────┘
                                       │
     ┌───────────────────┬─────────────┴───────┬───────────────────┐
     ▼                   ▼                     ▼                   ▼
┌──────────────┐ ┌───────────────┐ ┌──────────────────────┐ ┌──────────────┐
│  Quản Trị    │ │  Cung Cấp     │ │ Hỗ Trợ Khách Du Lịch │ │ Tích Hợp AI  │
│  Hệ Thống    │ │  Dịch Vụ      │ │ (Tourist Support)    │ │ API          │
└──────────────┘ └───────────────┘ └──────────────────────┘ └──────────────┘
```

### 🛠️ 2.1. Quản trị hệ thống (System Administration)
- **Giám sát & Quản lý tài khoản**: Quản lý phân quyền (RBAC), cấp phép và kiểm soát hoạt động của các nhóm người dùng (Admin, Nhà cung cấp dịch vụ, Khách du lịch).
- **Quản lý & Kiểm duyệt nội dung**: Duyệt bài đăng địa điểm, dịch vụ từ nhà cung cấp; kiểm soát các bình luận, đánh giá vi phạm tiêu chuẩn cộng đồng.
- **Theo dõi lỗi & Trải nghiệm người dùng**: Ghi log hệ thống (System logs), theo dõi phản hồi/báo cáo lỗi từ người dùng để kịp thời khắc phục.
- **Thống kê & Giám sát hệ thống**: Dashboard trực quan hiển thị lượt truy cập, số lượng người dùng mới, lượng tương tác và trạng thái hoạt động của server/API.

### 🏪 2.2. Cung cấp dịch vụ (Service Provider Management)
- **Quản lý địa điểm & Dịch vụ**: Thêm mới, chỉnh sửa, cập nhật thông tin chi tiết địa điểm du lịch, khách sạn, nhà hàng, quán cafe, vé tham quan.
- **Quy trình gửi & Kiểm duyệt**: Đăng tải thông tin địa điểm lên hệ thống và gửi yêu cầu kiểm duyệt tới Admin trước khi hiển thị công khai.
- **Quản lý đánh giá của khách hàng**: Theo dõi phản hồi, đánh giá từ du khách và phản hồi trực tiếp các thắc mắc/đánh giá.
- **Theo dõi thống kê dịch vụ**: Xem báo cáo chi tiết về lượt xem địa điểm, lượt tương tác và mức độ quan tâm của du khách đối với dịch vụ của mình.

### 🧳 2.3. Hỗ trợ khách du lịch (Tourist Support Services)
- **Tìm kiếm & Khám phá địa điểm**: Tìm kiếm thông minh với các bộ lọc đa dạng (theo danh mục, mức giá, khu vực, đánh giá sao, mức độ phổ biến).
- **Xem thông tin chi tiết**: Hình ảnh chất lượng cao, vị trí bản đồ, giờ mở cửa, giá vé, bài viết đánh giá chi tiết và các tiện ích đi kèm.
- **Sở thích, Yêu thích & Đánh giá**: Lưu địa điểm yêu thích (Wishlist), thiết lập hồ sơ sở thích cá nhân, gửi đánh giá và chấm điểm (rating/review).
- **Tạo & Quản lý lịch trình**: Công cụ lập kế hoạch chuyến đi, sắp xếp các điểm đến theo từng ngày, tối ưu hóa thời gian di chuyển.

### 🤖 2.4. Tích hợp AI API (AI-Powered Features)
- **AI Tư vấn du lịch (AI Travel Assistant)**: Chatbot thông minh sẵn sàng giải đáp mọi thắc mắc của du khách về thời tiết, trang phục, văn hóa, ẩm thực Đà Lạt 24/7.
- **AI Tạo lịch trình cá nhân hóa**: Tự động tạo lộ trình chuyến đi chi tiết theo từng ngày dựa trên số ngày lưu trú, ngân sách dự kiến, thành phần đoàn đi và sở thích cá nhân.
- **AI Hỗ trợ đề xuất địa điểm (Smart Recommendation)**: Gợi ý các điểm đến phù hợp dựa trên hành vi tìm kiếm và sở thích của khách hàng.
- **AI Hỗ trợ quản trị & Kiểm duyệt**: Tự động quét và phát hiện các nội dung rác (spam), thông tin sai lệch hoặc đánh giá tiêu cực vi phạm quy chuẩn từ phía nhà cung cấp dịch vụ và người dùng.

---

## 📋 3. Nội Dung Đề Tài & Quy Trình Phát Triển

Dự án được triển khai theo các giai đoạn chuẩn hóa trong quy trình phát triển phần mềm:

1. **Khảo sát yêu cầu & Xác định phạm vi**: Thu thập dữ liệu thực tế về du lịch Đà Lạt, phân tích nhu cầu du khách và xác định phạm vi các tính năng của hệ thống.
2. **Phân tích nghiệp vụ & Xây dựng mô hình**: Thiết lập các mô hình Use Case, Sequence Diagram, Activity Diagram và sơ đồ luồng dữ liệu (DFD).
3. **Thiết kế kiến trúc hệ thống & Cơ sở dữ liệu**: Thiết kế kiến trúc Client-Server (RESTful API), chuẩn hóa ERD và thiết kế sơ đồ Database PostgreSQL.
4. **Thiết kế UI/UX & Xây dựng Prototype**: Xây dựng Wireframe và thiết kế giao diện người dùng hiện đại, tối ưu trải nghiệm trên cả Desktop và Mobile.
5. **Phát triển Cơ sở dữ liệu**: Khởi tạo Schema, thực hiện Migration và chèn dữ liệu mẫu (Seed Data) chuẩn xác về các địa điểm du lịch Đà Lạt.
6. **Xác thực, Phân quyền & Quản lý người dùng**: Cài đặt cơ chế xác thực an toàn (JWT/OAuth2) và phân quyền chi tiết (Admin, Provider, Tourist).
7. **Phát triển chức năng nghiệp vụ**: Lập trình hoàn thiện các API Backend (Python) và giao diện Frontend (React.js + Tailwind CSS).
8. **Nghiên cứu & Tích hợp AI API**: Đấu nối API các mô hình AI (Gemini, OpenAI, DeepSeek) để xử lý logic tư vấn và tạo lịch trình tự động.
9. **Tích hợp & Kiểm thử toàn bộ hệ thống**: Kết nối Frontend - Backend, chạy Docker Containerization, tiến hành kiểm thử Unit Test, Integration Test và End-to-End Test.

---

## 🛠️ 4. Phần Mềm & Công Nghệ Sử Dụng

| Thành Phần | Công Nghệ / Tools | Mô Tả Chức Năng |
| :--- | :--- | :--- |
| **IDE / Editor** | **Visual Studio Code** | Môi trường phát triển tích hợp, chỉnh sửa mã nguồn backend/frontend. |
| **Frontend Framework** | **React.js** | Thư viện JavaScript xây dựng giao diện người dùng đơn trang (SPA) mượt mà. |
| **CSS Framework** | **Tailwind CSS** | Framework CSS utility-first giúp thiết kế giao diện đẹp, hiện đại & Responsive. |
| **Backend Language** | **Python** | Ngôn ngữ lập trình chính xây dựng hệ thống xử lý logic và RESTful API. |
| **Database** | **PostgreSQL** | Hệ quản trị cơ sở dữ liệu quan hệ mạnh mẽ, đảm bảo tính toàn vẹn dữ liệu. |
| **Version Control** | **Git & GitHub** | Quản lý phiên bản mã nguồn, quản lý nhánh tính năng và cộng tác dự án. |
| **Cloud Storage** | **Cloudinary** | Dịch vụ đám mây lưu trữ, tối ưu hóa và quản lý tải lên hình ảnh/phương tiện. |
| **AI Integration** | **AI APIs (Gemini / OpenAI / DeepSeek)** | Tương tác mô hình AI thông qua API để tư vấn & lập lịch trình thông minh. |
| **Containerization** | **Docker & Docker Compose** | Đóng gói môi trường Frontend, Backend, Database giúp triển khai nhất quán. |

---

## 📚 5. Tài Liệu Tham Khảo

1. **Google Gemini API**: *Gemini API Reference - Tài liệu chính thức về các API và endpoint để tương tác với mô hình Gemini.*  
   🔗 [https://ai.google.dev/api](https://ai.google.dev/api)
2. **OpenAI API Documentation**: *Tài liệu hướng dẫn tích hợp và sử dụng các mô hình API của OpenAI.*  
   🔗 [https://developers.openai.com/api/docs](https://developers.openai.com/api/docs)
3. **React Documentation**: *Tài liệu thư viện React chính thức dành cho việc phát triển giao diện người dùng Web.*  
   🔗 [https://react.dev/learn](https://react.dev/learn)
4. **DeepSeek API Documentation**: *Tài liệu hướng dẫn gọi API của mô hình DeepSeek.*  
   🔗 [https://api-docs.deepseek.com/](https://api-docs.deepseek.com/)
5. **Python Documentation**: *Tài liệu chính thức về ngôn ngữ lập trình Python và thư viện chuẩn.*  
   🔗 [https://www.python.org/doc/](https://www.python.org/doc/)
6. **Docker Documentation**: *Tài liệu hướng dẫn đóng gói mã nguồn, thư viện và công cụ để triển khai ứng dụng nhất quán.*  
   🔗 [https://docs.docker.com/](https://docs.docker.com/) *(Yêu cầu gốc: https://www.python.org/doc/)*
7. **Git Project Documentation**: *Tài liệu chính thức về hệ thống quản lý phiên bản mã nguồn Git.*  
   🔗 [https://git-scm.com/docs](https://git-scm.com/docs)

---

### 🚀 Hướng dẫn nhanh chạy dự án
```bash
# 1. Clone repository
git clone [https://github.com/Dragonjt24/Da_Lat_Travel_Consultation_Website.git]


# 2. Cấu hình biến môi trường


# 3. Khởi chạy hệ thống bằng Docker 


# 4. Truy cập ứng dụng:
# - Frontend: 
# - Backend API: 
```

---
