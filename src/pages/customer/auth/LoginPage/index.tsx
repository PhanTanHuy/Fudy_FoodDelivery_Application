import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthSubmitButton from '../components/AuthSubmitButton'
import PhoneNumberField from '../components/PhoneNumberField'

function LoginPage() {
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/verify-otp', { state: { phone, mode: 'login' } })
  }

  return (
    <AuthLayout
      description="Nhập số điện thoại, Fudy sẽ giúp bạn tiếp tục hành trình món ngon."
      eyebrow="RẤT VUI ĐƯỢC GẶP LẠI"
      title="Đăng nhập Fudy"
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <PhoneNumberField onChange={setPhone} value={phone} />
        <AuthSubmitButton>Tiếp tục với số điện thoại</AuthSubmitButton>
        <div aria-hidden="true" className="auth-or">HOẶC</div>
        <Link className="auth-submit-button auth-guest-button" to="/">
          Khám phá Fudy trước
        </Link>
      </form>

      <p className="auth-switch">
        Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
