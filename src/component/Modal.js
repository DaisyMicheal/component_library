import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CookieIcon from '../assets/cookies.svg'

function Modal({ isOpen, onClose, onAccept }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleAcceptModal = () => {
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
      setIsModalOpen(false)
      onAccept && onAccept() // Call the onAccept function if provided
    }, 2000) // Display the success message for 2 seconds
  }

  if (!isModalOpen) {
    return (
      <div style={styles.showModalContainer}>
        <button style={styles.showModalButton} onClick={handleOpenModal}>
          Show Modal
        </button>
      </div>
    )
  }

  return (
    <div style={styles.overlay} onClick={handleCloseModal}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          style={styles.closeButton}
          onClick={handleCloseModal}
          data-testid='close-button'
        >
          ×
        </button>
        <div style={styles.content}>
          <img src={CookieIcon} alt='Cookie Icon' style={styles.icon} />
          <h2 style={styles.title} data-testid='modal-title'>
            We use cookies
          </h2>
          <p style={styles.text}>
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <button style={styles.acceptButton} onClick={handleAcceptModal}>
            Accept
          </button>
        </div>
        {showSuccessMessage && (
          <div style={styles.successMessage}>
            Cookies accepted successfully!
          </div>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAccept: PropTypes.func,
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
  showModalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  showModalButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
}

export default Modal
