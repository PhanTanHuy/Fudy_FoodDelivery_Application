import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import ProfileIcon from './ProfileIcon'

interface ProfileMenuItemProps {
  to: string
  icon: ReactNode
  title: string
  description: string
  accent?: string
}

function ProfileMenuItem({ to, icon, title, description, accent = 'blue' }: ProfileMenuItemProps) {
  return (
    <Link className="profile-menu-item" to={to}>
      <span className={`profile-menu-icon is-${accent}`}>{icon}</span>
      <span className="profile-menu-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <ProfileIcon className="profile-menu-chevron" name="chevron" size={18} />
    </Link>
  )
}

export default ProfileMenuItem
