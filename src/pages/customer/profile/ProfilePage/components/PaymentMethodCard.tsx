import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import ProfileIcon from './ProfileIcon'

interface PaymentMethodCardProps {
  name: string
  subtitle: string
  mark: ReactNode
  variant: 'momo' | 'zalo' | 'vnpay' | 'bank'
}

function PaymentMethodCard({ name, subtitle, mark, variant }: PaymentMethodCardProps) {
  return (
    <Link className="payment-method-card" to="/profile/payments">
      <span className={`payment-method-mark is-${variant}`}>{mark}</span>
      <span className="payment-method-copy">
        <strong>{name}</strong>
        <small>{subtitle}</small>
      </span>
      <ProfileIcon className="profile-menu-chevron" name="chevron" size={17} />
    </Link>
  )
}

export default PaymentMethodCard
