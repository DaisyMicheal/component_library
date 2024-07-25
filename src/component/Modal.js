import React from 'react'
import PropTypes from 'prop-types'
import CookieIcon from '../assets/cookies.svg'

function Modal({ isOpen, onClose, onAccept }) {
  if (!isOpen) return null

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div style={styles.content}>
          <img src={CookieIcon} alt='Cookie Icon' style={styles.icon} />
          <h2 style={styles.title}>We use cookies</h2>
          <p style={styles.text}>
            This website uses cookies to ensure you get the best experience on
            our website
          </p>
          <button style={styles.acceptButton} onClick={onAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    width: '400px',
    padding: '20px',
    position: 'relative',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  content: {
    textAlign: 'center',
  },
  icon: {
    width: '50px',
    height: '50px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  },
  text: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 20px 0',
  },
  acceptButton: {
    backgroundColor: '#FD7E14',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}

export default Modal
