import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Restaurant } from '../../../../../types/home'
import Icon from './Icon'

interface RestaurantCardProps {
  restaurant: Restaurant
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <article className="restaurant-card">
      <Link className="restaurant-card-link" to={`/restaurants/${restaurant.id}`}>
        <div className="restaurant-image-wrap">
          <img alt={restaurant.name} className="restaurant-image" loading="lazy" src={restaurant.imageUrl} />
          {restaurant.promotion && <span className="restaurant-promotion">{restaurant.promotion}</span>}
        </div>
        <div className="restaurant-card-body">
          <div className="restaurant-title-row">
            <h3>{restaurant.name}</h3>
            <span className="restaurant-rating"><Icon name="star" size={14} /> {restaurant.rating}</span>
          </div>
          <p className="restaurant-cuisine">{restaurant.cuisine}</p>
          <div className="restaurant-meta">
            <span><Icon name="clock" size={14} /> {restaurant.deliveryMinutes}</span>
            <span>{restaurant.distance}</span>
            <span>{restaurant.deliveryFee === 0 ? 'Freeship' : `${restaurant.deliveryFee.toLocaleString('vi-VN')}đ phí giao`}</span>
          </div>
        </div>
      </Link>
      <button
        aria-label={isFavorite ? `Bỏ yêu thích ${restaurant.name}` : `Yêu thích ${restaurant.name}`}
        aria-pressed={isFavorite}
        className={`favorite-button${isFavorite ? ' is-favorite' : ''}`}
        onClick={() => setIsFavorite((favorite) => !favorite)}
        type="button"
      >
        <Icon name="heart" size={18} />
      </button>
    </article>
  )
}

export default RestaurantCard
