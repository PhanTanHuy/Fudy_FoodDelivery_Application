export interface FoodCategory {
  id: string
  name: string
  emoji: string
  color: string
}

export interface Restaurant {
  id: string
  name: string
  cuisine: string
  categoryId: string
  imageUrl: string
  rating: number
  reviewCount: number
  deliveryMinutes: string
  deliveryFee: number
  distance: string
  promotion?: string
  isFeatured?: boolean
}

export interface PopularFood {
  id: string
  name: string
  restaurantId: string
  restaurantName: string
  imageUrl: string
  price: number
  originalPrice?: number
  rating: number
}

export interface HomeFeed {
  categories: FoodCategory[]
  restaurants: Restaurant[]
  popularFoods: PopularFood[]
}
