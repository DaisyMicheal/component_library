import PropTypes from 'prop-types'

function Button({ label, backgroundColor = 'red', size = 'md', handleClick }) {
  let scale = 3.5
  if (size === 'sm') scale = 2.5
  if (size === 'lg') scale = 4.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: '2px',
    borderRadius: '10px',
    boxShadow: '0 5px 9px rgba(0, 0, 0, 0.1)',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '16px',
    fontFamily: 'Inria Sans',
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
}

export default Button
