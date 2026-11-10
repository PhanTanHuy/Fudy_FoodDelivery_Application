import { Link } from 'react-router-dom'
import type { PopularFood } from '../../../../../types/home'
import Icon from './Icon'

interface PopularFoodCardProps {
  food: PopularFood
}

function PopularFoodCard({ food }: PopularFoodCardProps) {
  return (
    <Link className="popular-food-card" to={`/foods/${food.id}`}>
      <div className="popular-food-image-wrap">
        <img alt={food.name} className="popular-food-image" loading="lazy" src={food.imageUrl} />
        <span className="food-rating"><Icon name="star" size={13} /> {food.rating}</span>
      </div>
      <div className="popular-food-details">
        <h3>{food.name}</h3>
        <p>{food.restaurantName}</p>
        <div className="food-price-row">
          <strong>{food.price.toLocaleString('vi-VN')}đ</strong>
          {food.originalPrice && <del>{food.originalPrice.toLocaleString('vi-VN')}đ</del>}
        </div>
      </div>
    </Link>
  )
}

export default PopularFoodCard
