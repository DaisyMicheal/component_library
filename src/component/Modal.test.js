import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from '../component/Modal'

describe('Modal Component', () => {
  const handleClose = jest.fn()
  const handleAccept = jest.fn()

  beforeEach(() => {
    handleClose.mockClear()
    handleAccept.mockClear()
  })

  test('renders modal with content', () => {
    render(
      <Modal isOpen={true} onClose={handleClose} onAccept={handleAccept} />
    )

    // Check if the modal content is rendered
    expect(screen.getByText('We use cookies')).toBeInTheDocument()
    expect(
      screen.getByText(
        'This website uses cookies to ensure you get the best experience on our website'
      )
    ).toBeInTheDocument()

    // Check if the Accept button is rendered
    expect(screen.getByText('Accept')).toBeInTheDocument()
  })

  test('closes the modal when close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={handleClose} onAccept={handleAccept} />
    )

    // Click the close button
    fireEvent.click(screen.getByTestId('close-button'))

    // Check if the handleClose function is called
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('does not render the modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={handleClose} onAccept={handleAccept} />
    )

    // Check if the modal content is not rendered
    expect(screen.queryByText('We use cookies')).not.toBeInTheDocument()
    expect(
      screen.queryByText(
        'This website uses cookies to ensure you get the best experience on our website'
      )
    ).not.toBeInTheDocument()
  })
})
