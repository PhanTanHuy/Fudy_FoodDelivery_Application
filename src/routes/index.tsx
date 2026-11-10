import { createBrowserRouter } from 'react-router-dom'
import CartPage from '../pages/customer/cart/CartPage'
import CheckoutPage from '../pages/customer/checkout/CheckoutPage'
import OrderSuccessPage from '../pages/customer/checkout/OrderSuccessPage'
import SelectAddressPage from '../pages/customer/checkout/SelectAddressPage'
import SelectPaymentPage from '../pages/customer/checkout/SelectPaymentPage'
import ForgotPasswordPage from '../pages/customer/auth/ForgotPasswordPage'
import LoginPage from '../pages/customer/auth/LoginPage'
import RegisterPage from '../pages/customer/auth/RegisterPage'
import VerifyOTPPage from '../pages/customer/auth/VerifyOTPPage'
import FavoritesPage from '../pages/customer/favorites/FavoritesPage'
import FoodDetailPage from '../pages/customer/food/FoodDetailPage'
import HomePage from '../pages/customer/home/HomePage'
import OrderDetailPage from '../pages/customer/orders/OrderDetailPage'
import DriverTrackingPage from '../pages/customer/orders/DriverTrackingPage'
import OrderHistoryPage from '../pages/customer/orders/OrderHistoryPage'
import OrderTrackingPage from '../pages/customer/orders/OrderTrackingPage'
import AddressManagementPage from '../pages/customer/profile/AddressManagementPage'
import ChangePasswordPage from '../pages/customer/profile/ChangePasswordPage'
import EditProfilePage from '../pages/customer/profile/EditProfilePage'
import PaymentMethodsPage from '../pages/customer/profile/PaymentMethodsPage'
import ProfilePage from '../pages/customer/profile/ProfilePage'
import RestaurantDetailPage from '../pages/customer/restaurant/RestaurantDetailPage'
import RestaurantMenuPage from '../pages/customer/restaurant/RestaurantMenuPage'
import RestaurantReviewsPage from '../pages/customer/restaurant/RestaurantReviewsPage'
import SearchHistoryPage from '../pages/customer/search/SearchHistoryPage'
import SearchPage from '../pages/customer/search/SearchPage'
import SearchResultsPage from '../pages/customer/search/SearchResultsPage'
import ChatSupportPage from '../pages/customer/support/ChatSupportPage'
import FAQPage from '../pages/customer/support/FAQPage'
import SupportPage from '../pages/customer/support/SupportPage'
import WelcomePage from '../pages/customer/welcome/WelcomePage'

export const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/verify-otp', element: <VerifyOTPPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/search/results', element: <SearchResultsPage /> },
  { path: '/search/history', element: <SearchHistoryPage /> },
  { path: '/restaurants/:id', element: <RestaurantDetailPage /> },
  { path: '/restaurants/:id/menu', element: <RestaurantMenuPage /> },
  { path: '/restaurants/:id/reviews', element: <RestaurantReviewsPage /> },
  { path: '/foods/:id', element: <FoodDetailPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/checkout/address', element: <SelectAddressPage /> },
  { path: '/checkout/payment', element: <SelectPaymentPage /> },
  { path: '/order-success/:id', element: <OrderSuccessPage /> },
  { path: '/orders', element: <OrderHistoryPage /> },
  { path: '/orders/:id', element: <OrderDetailPage /> },
  { path: '/orders/:id/tracking', element: <OrderTrackingPage /> },
  { path: '/orders/:id/driver', element: <DriverTrackingPage /> },
  { path: '/favorites', element: <FavoritesPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/profile/edit', element: <EditProfilePage /> },
  { path: '/profile/addresses', element: <AddressManagementPage /> },
  { path: '/profile/payments', element: <PaymentMethodsPage /> },
  { path: '/profile/change-password', element: <ChangePasswordPage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/support/faq', element: <FAQPage /> },
  { path: '/support/chat', element: <ChatSupportPage /> },
])
