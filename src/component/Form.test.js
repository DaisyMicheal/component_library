import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from '../component/Form'

describe('Form component', () => {
  test('renders the form and submits the data correctly', () => {
    const handleSubmit = jest.fn()
    render(<Form onSubmit={handleSubmit} />)

    //  rendering form title
    expect(screen.getByText('HEY LET’S GET IN TOUCH')).toBeInTheDocument()

    fireEvent.change(screen.getByPlaceholderText('FullName'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'john.doe@example.com' },
    })

    fireEvent.click(screen.getByText('Submit'))

    // handleSubmit was called with the correct data
    expect(handleSubmit).toHaveBeenCalledWith({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
    })

    expect(screen.getByText('Form submitted successfully')).toBeInTheDocument()
  })

  test('displays error message when fields are empty', () => {
    const handleSubmit = jest.fn()
    render(<Form onSubmit={handleSubmit} />)

    fireEvent.click(screen.getByText('Submit'))

    //  handleSubmit was not called
    expect(handleSubmit).not.toHaveBeenCalled()

    // display error message
    expect(screen.getByText('All fields are required')).toBeInTheDocument()
  })
})
