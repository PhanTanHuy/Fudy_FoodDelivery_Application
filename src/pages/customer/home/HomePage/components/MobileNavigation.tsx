import { Link } from 'react-router-dom'
import Icon from './Icon'

function MobileNavigation() {
  return (
    <nav aria-label="Điều hướng chính" className="mobile-navigation">
      <Link aria-current="page" className="mobile-nav-item is-current" to="/home">
        <span className="mobile-nav-icon">⌂</span>
        <span>Khám phá</span>
      </Link>
      <Link className="mobile-nav-item" to="/home#restaurants">
        <Icon name="location" size={19} />
        <span>Gần bạn</span>
      </Link>
      <Link className="mobile-nav-item" to="/favorites">
        <Icon name="heart" size={19} />
        <span>Ưu đãi</span>
      </Link>
      <Link className="mobile-nav-item" to="/orders">
        <Icon name="clock" size={19} />
        <span>Đặt lại</span>
      </Link>
      <Link className="mobile-nav-item" to="/cart">
        <Icon name="bag" size={19} />
        <span>Giỏ hàng</span>
      </Link>
    </nav>
  )
}

export default MobileNavigation
