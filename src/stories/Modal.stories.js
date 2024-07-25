import React, { useState } from 'react'
import Modal from '../component/Modal'

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    onAccept: { action: 'onAccept' },
  },
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => {
    setIsOpen(false)
    args.onClose()
  }
  const handleAccept = () => {
    setIsOpen(false)
    args.onAccept()
  }

  return (
    <div>
      <button style={styles.showModalButton} onClick={handleOpen}>
        Show Modal
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onAccept={handleAccept}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  isOpen: false,
}

const styles = {
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
}
