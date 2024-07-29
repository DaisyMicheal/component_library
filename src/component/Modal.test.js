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

    expect(screen.getByText('We use cookies')).toBeInTheDocument()
    expect(
      screen.getByText(
        'This website uses cookies to ensure you get the best experience on our website'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Accept')).toBeInTheDocument()
  })

  test('closes the modal when close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={handleClose} onAccept={handleAccept} />
    )

    fireEvent.click(screen.getByTestId('close-button'))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('does not render the modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={handleClose} onAccept={handleAccept} />
    )

    expect(screen.queryByText('We use cookies')).not.toBeInTheDocument()
    expect(
      screen.queryByText(
        'This website uses cookies to ensure you get the best experience on our website'
      )
    ).not.toBeInTheDocument()
  })
})
