import axios, { AxiosHeaders, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { homeFeed } from '../../mockdata/home'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1'
const useMockApi = !import.meta.env.VITE_API_BASE_URL

async function mockAdapter(
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse<unknown>> {
  await new Promise((resolve) => window.setTimeout(resolve, 280))

  const path = new URL(config.url ?? '/', 'http://mock.api').pathname.replace(/\/+$/, '')
  const responses: Record<string, unknown> = {
    '/home': homeFeed,
    '/categories': homeFeed.categories,
    '/restaurants': homeFeed.restaurants,
    '/foods/popular': homeFeed.popularFoods,
  }
  const data = responses[path]

  if (data === undefined) {
    return {
      data: { message: `Mock API route not found: ${path}` },
      status: 404,
      statusText: 'Not Found',
      headers: new AxiosHeaders(),
      config,
    }
  }

  return {
    data,
    status: 200,
    statusText: 'OK',
    headers: new AxiosHeaders(),
    config,
  }
}

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  ...(useMockApi ? { adapter: mockAdapter } : {}),
})
