import React from 'react'

const Button = ({
  backgroundColor = '#007bff',
  color = '#fff',
  label = 'Button',
  size = 'md',
  disabled = false,
  ariaLabel = '',
  onClick,
}) => {
  const buttonStyles = {
    backgroundColor,
    color,
    padding:
      size === 'sm' ? '8px 16px' : size === 'md' ? '10px 20px' : '12px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  }

  const hoverStyles = {
    backgroundColor: disabled
      ? backgroundColor
      : darkenColor(backgroundColor, 20),
    transform: disabled ? 'none' : 'scale(1.05)',
  }

  const darkenColor = (color, percent) => {
    let f = parseInt(color.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent / 100,
      R = f >> 16,
      G = (f >> 8) & 0x00ff,
      B = f & 0x0000ff
    return (
      '#' +
      (
        0x1000000 +
        (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)
      )
        .toString(16)
        .slice(1)
    )
  }

  return (
    <button
      style={{
        ...buttonStyles,
        ...(disabled ? {} : hoverStyles),
      }}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
    </button>
  )
}

export default Button
