import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthSubmitButton from '../components/AuthSubmitButton'
import OtpInput from '../components/OtpInput'

interface OtpLocationState {
  phone?: string
  mode?: 'register' | 'login'
}

function VerifyOTPPage() {
  const [otp, setOtp] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as OtpLocationState | null
  const mode = state?.mode === 'login' ? 'login' : 'register'
  const phone = state?.phone?.trim()
  const title = mode === 'login' ? 'Xác thực đăng nhập' : 'Xác thực số điện thoại'
  const description =
    mode === 'login'
      ? 'Nhập mã OTP để tiếp tục đăng nhập tài khoản Fudy của bạn.'
      : 'Nhập mã OTP để hoàn tất bước tạo tài khoản Fudy.'

  return (
    <AuthLayout description={description} eyebrow="THÊM MỘT BƯỚC NHỎ" title={title}>
      <div className="auth-code-destination">
        Số điện thoại dùng để nhận mã xác thực
        <strong>{phone ? `+84 ${phone}` : '+84 ••• ••• ••••'}</strong>
      </div>

      <form
        className="auth-form auth-otp-form"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <OtpInput onChange={setOtp} value={otp} />
        <p className="auth-resend">
          Chưa nhận được mã? <button disabled type="button">Gửi lại mã OTP</button>
        </p>
        <AuthSubmitButton>Xác nhận OTP</AuthSubmitButton>
      </form>

      <Link
        className="auth-back-link"
        onClick={(event) => {
          event.preventDefault()
          navigate(mode === 'login' ? '/login' : '/register')
        }}
        to={mode === 'login' ? '/login' : '/register'}
      >
        <span aria-hidden="true">←</span> Đổi số điện thoại
      </Link>
    </AuthLayout>
  )
}

export default VerifyOTPPage
