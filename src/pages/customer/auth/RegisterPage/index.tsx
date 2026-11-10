import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthSubmitButton from '../components/AuthSubmitButton'
import PhoneNumberField from '../components/PhoneNumberField'

function RegisterPage() {
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/verify-otp', { state: { phone, mode: 'register' } })
  }

  return (
    <AuthLayout
      description="Tạo tài khoản bằng số điện thoại để khám phá món ngon và theo dõi đơn hàng."
      eyebrow="BẮT ĐẦU CÙNG FUDY"
      title="Tạo tài khoản"
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <PhoneNumberField onChange={setPhone} value={phone} />
        <AuthSubmitButton>Tiếp tục với số điện thoại</AuthSubmitButton>
        <div aria-hidden="true" className="auth-or">ĐĂNG KÝ NHANH GỌN</div>
      </form>

      <p className="auth-switch">
        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </AuthLayout>
  )
}

export default RegisterPage
