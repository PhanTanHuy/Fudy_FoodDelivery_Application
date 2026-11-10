import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

interface AuthLayoutProps {
  children: ReactNode
  eyebrow: string
  title: string
  description: string
}

function AuthLayout({ children, eyebrow, title, description }: AuthLayoutProps) {
  return (
    <main className="auth-page">
      <section aria-label="Fudy" className="auth-promo">
        <Link aria-label="Fudy trang chủ" className="auth-brand" to="/">
          <span className="auth-brand-mark">f</span>
          <span>fudy<span className="auth-brand-dot">.</span></span>
        </Link>

        <div className="auth-promo-content">
          <span className="auth-promo-eyebrow">MÓN NGON, NIỀM VUI MỖI NGÀY</span>
          <h1>Chạm một chút,<br /><span>ngon cả ngày.</span></h1>
          <p>Khám phá quán quen, món mới và những ưu đãi dành riêng cho bạn.</p>

          <div aria-hidden="true" className="auth-food-art">
            <span className="auth-food-orbit auth-food-orbit-outer" />
            <span className="auth-food-orbit auth-food-orbit-inner" />
            <span className="auth-food-bowl">🍜</span>
            <span className="auth-food-float auth-food-float-one">🧋</span>
            <span className="auth-food-float auth-food-float-two">🥢</span>
            <span className="auth-food-sticker">Ngon<br />mê ly <b>✦</b></span>
          </div>
        </div>

        <div className="auth-promo-footer">
          <span>Giao tận nơi, vui tận hưởng.</span>
          <span>© 2026 Fudy</span>
        </div>
      </section>

      <section className="auth-content">
        <Link className="auth-mobile-brand" to="/" aria-label="Fudy trang chủ">
          <span className="auth-brand-mark">f</span>
          <span>fudy<span className="auth-brand-dot">.</span></span>
        </Link>
        <div className="auth-card">
          <div className="auth-card-heading">
            <span className="auth-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          {children}
          <p className="auth-legal">
            Tiếp tục nghĩa là bạn đồng ý với <a href="#terms">Điều khoản sử dụng</a> và{' '}
            <a href="#privacy">Chính sách bảo mật</a> của Fudy.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AuthLayout
