import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface AuthSubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function AuthSubmitButton({ children, ...props }: AuthSubmitButtonProps) {
  return (
    <button className="auth-submit-button" {...props} type="submit">
      {children}
      <span aria-hidden="true">→</span>
    </button>
  )
}

export default AuthSubmitButton
