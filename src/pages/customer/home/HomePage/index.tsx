import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { homeApi } from '../../../../services/api/homeApi'
import type { HomeFeed } from '../../../../types/home'
import CategoryStrip from './components/CategoryStrip'
import HomeHeader from './components/HomeHeader'
import Icon from './components/Icon'
import MobileNavigation from './components/MobileNavigation'
import PopularFoodCard from './components/PopularFoodCard'
import RestaurantCard from './components/RestaurantCard'
import './styles.css'

function HomePage() {
  const [feed, setFeed] = useState<HomeFeed | null>(null)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'dine-in'>('delivery')
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let active = true

    homeApi
      .getFeed()
      .then((data) => {
        if (active) {
          setFeed(data)
          setError('')
        }
      })
      .catch((cause: unknown) => {
        if (active) {
          setError(cause instanceof Error ? cause.message : 'Không thể tải dữ liệu trang chủ.')
        }
      })

    return () => {
      active = false
    }
  }, [reloadKey])

  const normalizedSearch = search.trim().toLocaleLowerCase('vi')
  const restaurants =
    feed?.restaurants.filter((restaurant) => {
      const matchesCategory = !activeCategory || restaurant.categoryId === activeCategory
      const matchesSearch =
        !normalizedSearch ||
        `${restaurant.name} ${restaurant.cuisine}`.toLocaleLowerCase('vi').includes(normalizedSearch)

      return matchesCategory && matchesSearch
    }) ?? []
  const restaurantIds = new Set(restaurants.map((restaurant) => restaurant.id))
  const popularFoods =
    feed?.popularFoods.filter((food) => {
      const matchesSearch =
        !normalizedSearch ||
        `${food.name} ${food.restaurantName}`.toLocaleLowerCase('vi').includes(normalizedSearch)

      return restaurantIds.has(food.restaurantId) && matchesSearch
    }) ?? []

  return (
    <div className="customer-home">
      <HomeHeader onSearch={setSearch} search={search} />

      <main className="home-main">
        <section aria-label="Ưu đãi hôm nay" className="hero-banner">
          <div className="hero-copy">
            <span className="hero-kicker"><span className="hero-sparkle">✦</span> NGON MỖI NGÀY, VUI MỖI BỮA</span>
            <h1>Đói bụng rồi?<br /><span>Món ngon đến ngay.</span></h1>
            <p>Chọn món bạn thích, Fudy giao tận nơi trong tích tắc.</p>
            <a className="hero-cta" href="#restaurants">
              Khám phá món ngon <Icon name="arrow" size={17} />
            </a>
          </div>
          <div aria-hidden="true" className="hero-art">
            <span className="hero-orbit hero-orbit-one" />
            <span className="hero-orbit hero-orbit-two" />
            <span className="hero-food-emoji">🍜</span>
            <span className="hero-floating hero-floating-one">🧋</span>
            <span className="hero-floating hero-floating-two">🥢</span>
            <span className="hero-deal">Freeship<br /><strong>0đ</strong></span>
          </div>
          <div aria-hidden="true" className="hero-pagination"><i /><i /><i /></div>
        </section>

        <div className="service-switch" role="group" aria-label="Loại hình dịch vụ">
          <button
            aria-pressed={deliveryMode === 'delivery'}
            className={deliveryMode === 'delivery' ? 'selected' : ''}
            onClick={() => setDeliveryMode('delivery')}
            type="button"
          >
            <Icon name="truck" size={17} /> Giao tận nơi
          </button>
          <button
            aria-pressed={deliveryMode === 'dine-in'}
            className={deliveryMode === 'dine-in' ? 'selected' : ''}
            onClick={() => setDeliveryMode('dine-in')}
            type="button"
          >
            <span>⌂</span> Đến nhà hàng
          </button>
        </div>

        <section aria-labelledby="category-title" className="home-section category-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">CHỌN THEO SỞ THÍCH</span>
              <h2 id="category-title">Hôm nay ăn gì?</h2>
            </div>
            {activeCategory && (
              <button className="clear-filter" onClick={() => setActiveCategory('')} type="button">
                Bỏ lọc
              </button>
            )}
          </div>
          {feed ? (
            <CategoryStrip
              activeCategory={activeCategory}
              categories={feed.categories}
              onSelect={setActiveCategory}
            />
          ) : !error ? (
            <div aria-label="Đang tải danh mục" className="category-loading" />
          ) : null}
        </section>

        <section aria-label="Mã giảm giá" className="deal-strip">
          <div className="deal-icon">🎁</div>
          <div className="deal-copy">
            <strong>Thứ ngon đang chờ bạn</strong>
            <span>Ưu đãi đến 50.000đ cho đơn đầu tiên</span>
          </div>
          <span className="deal-code">FUDY50</span>
          <span aria-hidden="true" className="deal-arrow">→</span>
        </section>

        <section aria-labelledby="restaurant-title" className="home-section" id="restaurants">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">GẦN BẠN · GIAO NHANH</span>
              <h2 id="restaurant-title">Quán ngon quanh đây</h2>
            </div>
            <button className="section-link" onClick={() => setActiveCategory('')} type="button">
              Xem tất cả <Icon name="arrow" size={16} />
            </button>
          </div>
          {error ? (
            <div className="feed-error" role="alert">
              <span>{error}</span>
              <button onClick={() => setReloadKey((key) => key + 1)} type="button">Thử lại</button>
            </div>
          ) : feed ? (
            restaurants.length ? (
              <div className="restaurant-grid">
                {restaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            ) : (
              <p className="empty-message">Chưa tìm thấy quán phù hợp. Hãy thử từ khóa khác nhé.</p>
            )
          ) : (
            <div aria-label="Đang tải nhà hàng" className="restaurant-loading">
              <span /><span /><span />
            </div>
          )}
        </section>

        <section aria-labelledby="popular-title" className="home-section popular-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">ĐƯỢC YÊU THÍCH NHẤT</span>
              <h2 id="popular-title">Món ngon phải thử <span className="heading-sparkle">✦</span></h2>
            </div>
            <a className="section-link" href="#restaurants">
              Khám phá <Icon name="arrow" size={16} />
            </a>
          </div>
          {feed && popularFoods.length > 0 && (
            <div className="popular-food-list">
              {popularFoods.map((food) => <PopularFoodCard food={food} key={food.id} />)}
            </div>
          )}
        </section>

        <section aria-label="Gợi ý giao hàng" className="delivery-note">
          <span className="delivery-note-icon"><Icon name="location" size={19} /></span>
          <span><strong>Giao đến địa chỉ của bạn</strong><small>29 Đường Số 3, KDC City Center</small></span>
          <Icon className="delivery-note-chevron" name="chevron" size={18} />
        </section>

        <footer className="home-footer">
          <Link aria-label="Fudy trang chủ" className="brand footer-brand" to="/home">
            <span className="brand-mark">f</span><span>fudy<span className="brand-dot">.</span></span>
          </Link>
          <p>Gọi món dễ dàng, vui vẻ mỗi ngày.</p>
          <span>© 2026 Fudy</span>
        </footer>
      </main>

      <MobileNavigation />
    </div>
  )
}

export default HomePage
