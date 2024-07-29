import React, { useState } from 'react'
import Modal from '../component/Modal'

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {
    onAccept: { action: 'accepted' },
  },
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleAccept = () => {
    args.onAccept()
    setIsOpen(false)
  }

  return (
    <Modal
      {...args}
      isOpen={isOpen}
      onAccept={handleAccept}
      onClose={() => setIsOpen(false)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
