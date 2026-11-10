import type { ReactNode, SVGProps } from 'react'

type IconName =
  | 'arrow'
  | 'bag'
  | 'bank'
  | 'chevron'
  | 'circleHelp'
  | 'creditCard'
  | 'edit'
  | 'heart'
  | 'home'
  | 'logout'
  | 'mapPin'
  | 'phone'
  | 'shield'
  | 'user'
  | 'users'

interface ProfileIconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-7-7 7 7-7 7" />,
  bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  bank: <><path d="m3 9 9-6 9 6H3Zm2 2v7m4-7v7m6-7v7m4-7v7M3 21h18m-16-3h14" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  circleHelp: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 0 1 4.8 1c0 1.7-2.4 2.2-2.4 3.8m0 3.2h.01" /></>,
  creditCard: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18m-14 5h4" /></>,
  edit: <><path d="m15 5 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z" /></>,
  heart: <path d="M20.8 8.7c0 5.3-8.8 10-8.8 10s-8.8-4.7-8.8-10A4.7 4.7 0 0 1 12 6.5a4.7 4.7 0 0 1 8.8 2.2Z" />,
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" /></>,
  logout: <><path d="M10 17l5-5-5-5m5 5H3" /><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" /></>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7.5a4 4 0 0 1 0 7.8M20 15a4 4 0 0 1 2 3.5V21" /></>,
}

function ProfileIcon({ name, size = 20, ...props }: ProfileIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {iconPaths[name]}
    </svg>
  )
}

export default ProfileIcon
