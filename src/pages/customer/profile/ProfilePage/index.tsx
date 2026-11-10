import { Link } from 'react-router-dom'
import PaymentMethodCard from './components/PaymentMethodCard'
import ProfileIcon from './components/ProfileIcon'
import ProfileMenuItem from './components/ProfileMenuItem'
import './styles.css'

function ProfilePage() {
  return (
    <div className="customer-profile">
      <header className="profile-header">
        <div className="profile-header-inner">
          <Link aria-label="Fudy trang chủ" className="profile-brand" to="/">
            <span className="profile-brand-mark">f</span>
            <span>fudy<span className="profile-brand-dot">.</span></span>
          </Link>
          <div className="profile-header-actions">
            <Link className="profile-header-link" to="/">
              <ProfileIcon name="home" size={18} />
              <span>Trang chủ</span>
            </Link>
            <Link className="profile-header-link" to="/orders">
              <ProfileIcon name="bag" size={18} />
              <span>Đơn hàng</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="profile-main">
        <div className="profile-page-heading">
          <div>
            <span className="profile-eyebrow">TÀI KHOẢN CỦA BẠN</span>
            <h1>Hồ sơ cá nhân</h1>
          </div>
          <span className="profile-welcome">Quản lý thông tin và tiện ích</span>
        </div>

        <div className="profile-layout">
          <div className="profile-main-column">
            <section aria-label="Thông tin khách hàng" className="profile-panel profile-identity">
              <div aria-label="Ảnh đại diện Nguyễn Minh Anh" className="profile-avatar" role="img">
                MA
              </div>
              <div className="profile-identity-copy">
                <span className="profile-member-label">THÀNH VIÊN FUDY</span>
                <h2>Nguyễn Minh Anh</h2>
                <p>090 ••• •• 68</p>
              </div>
              <Link aria-label="Chỉnh sửa thông tin cá nhân" className="profile-identity-action" to="/profile/edit">
                <ProfileIcon name="edit" size={15} />
                Chỉnh sửa
              </Link>
            </section>

            <section aria-labelledby="profile-payments-title" className="profile-panel">
              <div className="profile-panel-heading">
                <div>
                  <h2 id="profile-payments-title">Phương thức thanh toán</h2>
                  <p>Chọn cách thanh toán thuận tiện cho bạn</p>
                </div>
                <Link className="profile-panel-link" to="/profile/payments">
                  Quản lý <ProfileIcon name="chevron" size={15} />
                </Link>
              </div>
              <div className="payment-method-grid">
                <PaymentMethodCard
                  mark="M"
                  name="Ví MoMo"
                  subtitle="Liên kết ví điện tử"
                  variant="momo"
                />
                <PaymentMethodCard
                  mark="Z"
                  name="ZaloPay"
                  subtitle="Liên kết ví điện tử"
                  variant="zalo"
                />
                <PaymentMethodCard
                  mark="VNP"
                  name="VNPAY"
                  subtitle="Ví và QR thanh toán"
                  variant="vnpay"
                />
                <PaymentMethodCard
                  mark={<ProfileIcon name="bank" size={18} />}
                  name="Tài khoản ngân hàng"
                  subtitle="Thêm thẻ hoặc tài khoản"
                  variant="bank"
                />
              </div>
            </section>

            <section aria-labelledby="profile-account-title" className="profile-panel">
              <div className="profile-section-title">
                <h2 id="profile-account-title">Tài khoản của tôi</h2>
              </div>
              <div className="profile-menu-list">
                <ProfileMenuItem
                  accent="blue"
                  description="Cập nhật họ tên và thông tin liên hệ"
                  icon={<ProfileIcon name="user" size={19} />}
                  title="Chỉnh sửa thông tin cá nhân"
                  to="/profile/edit"
                />
                <ProfileMenuItem
                  accent="violet"
                  description="Quản lý nơi nhận các đơn hàng"
                  icon={<ProfileIcon name="mapPin" size={19} />}
                  title="Sổ địa chỉ"
                  to="/profile/addresses"
                />
                <ProfileMenuItem
                  accent="peach"
                  description="Cập nhật bảo mật tài khoản"
                  icon={<ProfileIcon name="shield" size={19} />}
                  title="Đổi mật khẩu"
                  to="/profile/change-password"
                />
              </div>
            </section>
          </div>

          <aside aria-label="Dịch vụ và hỗ trợ" className="profile-aside">
            <section aria-labelledby="profile-services-title" className="profile-panel">
              <div className="profile-section-title">
                <h2 id="profile-services-title">Dịch vụ & hỗ trợ</h2>
              </div>
              <div className="profile-menu-list">
                <ProfileMenuItem
                  accent="rose"
                  description="Câu hỏi thường gặp và trợ giúp"
                  icon={<ProfileIcon name="circleHelp" size={19} />}
                  title="Trung tâm trợ giúp"
                  to="/support"
                />
                <ProfileMenuItem
                  accent="green"
                  description="Xem các món ăn bạn đã lưu"
                  icon={<ProfileIcon name="heart" size={19} />}
                  title="Món ăn yêu thích"
                  to="/favorites"
                />
                <ProfileMenuItem
                  accent="blue"
                  description="Theo dõi các đơn đã đặt"
                  icon={<ProfileIcon name="bag" size={19} />}
                  title="Lịch sử đơn hàng"
                  to="/orders"
                />
              </div>
            </section>

            <section aria-labelledby="driver-promo-title" className="driver-promo">
              <span className="driver-promo-icon"><ProfileIcon name="users" size={22} /></span>
              <h2 id="driver-promo-title">Giao đồ ăn cùng Fudy</h2>
              <p>Trở thành đối tác tài xế, chủ động thời gian và cùng mang món ngon đến mọi người.</p>
              <Link className="driver-promo-link" to="/support?topic=delivery-partner">
                Tìm hiểu cơ hội <ProfileIcon name="arrow" size={15} />
              </Link>
            </section>

            <div className="profile-note">
              <ProfileIcon name="phone" size={16} />
              <span>Cần hỗ trợ thêm? Đội ngũ Fudy luôn sẵn sàng giúp bạn.</span>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage
