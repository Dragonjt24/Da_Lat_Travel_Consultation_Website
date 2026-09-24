import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/AuthPage.css";

type AuthMode = "login" | "register";

export default function AuthPage() {
    const navigate = useNavigate();
    const params = useParams();
    const modeFromUrl = params.mode as AuthMode | undefined;

    const initialMode: AuthMode = useMemo(() => {
        if (modeFromUrl === "register" || modeFromUrl === "login") return modeFromUrl;
        return "login";
    }, [modeFromUrl]);

    const [mode, setMode] = useState<AuthMode>(initialMode);

    const isLogin = mode === "login";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: Gọi API Python/FastAPI ở đây
        // Nếu login thành công: navigate("/")
        // Nếu register thành công: setMode("login")
        if (isLogin) {
            navigate("/");
        } else {
            setMode("login");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-shell">
                <div className="auth-card">
                    <div className="auth-hero">
                        <div className="auth-brand">
                            <div className="auth-brand-icon">A</div>
                            <div>
                                <h1>DaLat Travel AI</h1>
                                <p>Đăng nhập để tiếp tục trải nghiệm</p>
                            </div>
                        </div>

                        <div className="auth-tabs">
                            <button
                                className={isLogin ? "auth-tab active" : "auth-tab"}
                                onClick={() => setMode("login")}
                                type="button"
                            >
                                Đăng nhập
                            </button>
                            <button
                                className={!isLogin ? "auth-tab active" : "auth-tab"}
                                onClick={() => setMode("register")}
                                type="button"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>

                    <div className="auth-content">
                        <div className="auth-intro">
                            <h2>
                                {isLogin ? "Chào mừng bạn trở lại" : "Tạo tài khoản mới"}
                            </h2>
                            <p>
                                {isLogin
                                    ? "Đăng nhập để lưu lịch trình, chat với AI và quản lý địa điểm yêu thích."
                                    : "Đăng ký để sử dụng đầy đủ tính năng tư vấn, khám phá và lập kế hoạch du lịch."}
                            </p>
                        </div>

                        <form className="auth-form" onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div className="auth-grid-2">
                                    <div className="field">
                                        <label>Họ</label>
                                        <input type="text" placeholder="Nguyễn" />
                                    </div>
                                    <div className="field">
                                        <label>Tên</label>
                                        <input type="text" placeholder="Khai" />
                                    </div>
                                </div>
                            )}

                            <div className="field">
                                <label>Email</label>
                                <input type="email" placeholder="you@example.com" />
                            </div>

                            <div className="field">
                                <label>Mật khẩu</label>
                                <input type="password" placeholder="Nhập mật khẩu" />
                            </div>

                            {!isLogin && (
                                <div className="field">
                                    <label>Xác nhận mật khẩu</label>
                                    <input type="password" placeholder="Nhập lại mật khẩu" />
                                </div>
                            )}

                            {isLogin && (
                                <div className="auth-row">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                        <span>Ghi nhớ đăng nhập</span>
                                    </label>

                                    <button type="button" className="link-btn">
                                        Quên mật khẩu?
                                    </button>
                                </div>
                            )}

                            <button className="auth-submit" type="submit">
                                {isLogin ? "Đăng nhập" : "Đăng ký"}
                            </button>

                            <div className="auth-switch">
                                {isLogin ? (
                                    <>
                                        Chưa có tài khoản?{" "}
                                        <button
                                            type="button"
                                            className="link-btn"
                                            onClick={() => setMode("register")}
                                        >
                                            Đăng ký ngay
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Đã có tài khoản?{" "}
                                        <button
                                            type="button"
                                            className="link-btn"
                                            onClick={() => setMode("login")}
                                        >
                                            Đăng nhập
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="auth-divider">
                                <span>hoặc</span>
                            </div>
                            <button type="button" className="google-btn" >
                                <span className="google-icon" aria-hidden="true"> G </span>
                                <span>Tiếp tục với Google</span>
                            </button>

                            <button
                                type="button"
                                className="auth-back"
                                onClick={() => navigate("/")}
                            >
                                ← Quay về trang chủ
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}