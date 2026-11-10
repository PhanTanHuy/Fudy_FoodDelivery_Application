interface PhoneNumberFieldProps {
  value: string
  onChange: (value: string) => void
}

function PhoneNumberField({ value, onChange }: PhoneNumberFieldProps) {
  return (
    <label className="auth-field">
      <span className="auth-field-label">Số điện thoại</span>
      <span className="auth-phone-control">
        <span aria-label="Mã quốc gia Việt Nam" className="auth-country-code">
          <span aria-hidden="true">🇻🇳</span>
          <span>+84</span>
          <span aria-hidden="true" className="auth-country-chevron">⌄</span>
        </span>
        <span aria-hidden="true" className="auth-phone-divider" />
        <input
          autoComplete="tel-national"
          inputMode="tel"
          maxLength={11}
          onChange={(event) => onChange(event.target.value.replace(/[^\d\s]/g, ''))}
          placeholder="Nhập số điện thoại"
          required
          type="tel"
          value={value}
        />
      </span>
      <span className="auth-field-hint">Dùng số điện thoại để tạo tài khoản hoặc đăng nhập.</span>
    </label>
  )
}

export default PhoneNumberField
