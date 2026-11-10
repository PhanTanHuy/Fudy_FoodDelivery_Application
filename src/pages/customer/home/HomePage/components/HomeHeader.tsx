import { Link } from 'react-router-dom'
import Icon from './Icon'

interface HomeHeaderProps {
  search: string
  onSearch: (value: string) => void
}

function HomeHeader({ search, onSearch }: HomeHeaderProps) {
  return (
    <header className="home-header">
      <div className="header-inner">
        <Link aria-label="Fudy trang chủ" className="brand" to="/home">
          <span className="brand-mark">f</span>
          <span>fudy<span className="brand-dot">.</span></span>
        </Link>

        <button className="delivery-address" type="button">
          <span className="address-icon"><Icon name="location" size={18} /></span>
          <span className="address-copy">
            <span className="eyebrow">GIAO HÀNG ĐẾN</span>
            <strong>29 Đường Số 3 · KDC City Center</strong>
          </span>
          <Icon className="address-chevron" name="chevron" size={16} />
        </button>

        <label className="header-search">
          <Icon name="search" size={19} />
          <input
            aria-label="Tìm món ăn hoặc nhà hàng"
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Bạn đang thèm món gì?"
            type="search"
            value={search}
          />
          <kbd>⌘ K</kbd>
        </label>

        <div className="header-actions">
          <Link className="header-account" to="/login">
            <span className="account-avatar">A</span>
            <span>Đăng nhập</span>
          </Link>
          <Link className="header-register" to="/register">Đăng ký</Link>
          <Link aria-label="Giỏ hàng" className="header-cart" to="/cart">
            <Icon name="bag" size={20} />
            <span>Giỏ hàng</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
