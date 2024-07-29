import React from 'react'
import styled from 'styled-components'

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

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || '#007bff'};
  color: ${(props) => props.color || '#fff'};
  padding: ${(props) =>
    props.size === 'sm'
      ? '8px 16px'
      : props.size === 'md'
        ? '10px 20px'
        : '12px 24px'};
  border: ${(props) =>
    props.outline ? `2px solid ${props.backgroundColor}` : 'none'};
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(props) =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '18px'};
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  box-shadow: ${(props) =>
    props.shadow ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? props.backgroundColor
        : darkenColor(props.backgroundColor, 20)};
    transform: ${(props) => (props.disabled ? 'none' : 'scale(1.05)')};
  }

  &:disabled {
    opacity: 0.6;
  }
`

const Button = ({
  backgroundColor = '#007bff',
  color = '#fff',
  label = 'Button',
  size = 'md',
  disabled = false,
  outline = false,
  shadow = false,
  fullWidth = false,
  onClick,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    color={color}
    size={size}
    disabled={disabled}
    outline={outline}
    shadow={shadow}
    fullWidth={fullWidth}
    onClick={!disabled ? onClick : undefined}
  >
    {label}
  </StyledButton>
)

export default Button
