import { apiClient } from './client'
import { homeEndpoints } from '../endpoints/home'
import type { FoodCategory, HomeFeed, PopularFood, Restaurant } from '../../types/home'

export const homeApi = {
  async getFeed(): Promise<HomeFeed> {
    const response = await apiClient.get<HomeFeed>(homeEndpoints.feed)
    return response.data
  },
  async getCategories(): Promise<FoodCategory[]> {
    const response = await apiClient.get<FoodCategory[]>(homeEndpoints.categories)
    return response.data
  },
  async getRestaurants(): Promise<Restaurant[]> {
    const response = await apiClient.get<Restaurant[]>(homeEndpoints.restaurants)
    return response.data
  },
  async getPopularFoods(): Promise<PopularFood[]> {
    const response = await apiClient.get<PopularFood[]>(homeEndpoints.popularFoods)
    return response.data
  },
}
