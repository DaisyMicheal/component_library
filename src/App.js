import React, { useState } from 'react'
import Modal from './component/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleAcceptModal = () => {
    alert('Cookies accepted!')
    setIsModalOpen(false)
  }

  return (
    <div style={styles.container}>
      <button style={styles.showModalButton} onClick={handleOpenModal}>
        Show Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAccept={handleAcceptModal}
      />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: 'sans-serif',
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
  showModalButtonHover: {
    backgroundColor: '#0056b3',
  },
}

export default App
