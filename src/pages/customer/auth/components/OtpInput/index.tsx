interface OtpInputProps {
  value: string
  onChange: (value: string) => void
}

function OtpInput({ value, onChange }: OtpInputProps) {
  return (
    <label className="auth-field">
      <span className="auth-field-label">Mã xác thực OTP</span>
      <input
        aria-label="Nhập mã OTP gồm 6 chữ số"
        autoComplete="one-time-code"
        className="auth-otp-input"
        inputMode="numeric"
        maxLength={6}
        onChange={(event) => onChange(event.target.value.replace(/\D/g, ''))}
        pattern="[0-9]{6}"
        placeholder="• • • • • •"
        required
        type="text"
        value={value}
      />
      <span className="auth-field-hint">Mã OTP gồm 6 chữ số.</span>
    </label>
  )
}

export default OtpInput
