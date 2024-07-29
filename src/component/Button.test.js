import { expect, screen, fireEvent } from '@storybook/test'
import Button from './Button'

test('renders Button component with the defult props', () => {
  render(<Button label='Click me' />)
  const buttonElement = screen.getByText(/click me/i)
  except(buttonElement).toBeinTheDocument()
})

test(' renders Button component with custom props', () => {
  render(<Button label='Submit' backgrounColor='#28a745' />)
  const buttonElement = screen.getByText(/submit/i)
  except(buttonElement).toBeinTheDocument()
  except(buttonElement).toHavaStyle({ backgrounColor: '#28a745' })
})
test('calls onClick handler when button is clicked', () => {
  const handleClick = jest.fn()
  render(<Button label='Click me' onClick={handleClick} />)
  const buttonElement = screen.getByText(/click me/i)
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('does not call onClick handler when the button is disable', () => {
  render(<Button label='Click me' onClick={handleClick} disable />)
  const buttonElement = screen.getByText(/click me/i)
  fireEvent.click(buttonElement)
  expect(handleClick).not.toHaveBeenCalled()
})

test('applied shadow style whr shadow prop is true', () => {
  render(<Button label='Click me' shadow />)
  const buttonElement = screen.getByText(/click me/i)
  expect(buttonElement).toHaveStyle({ boxShadow: '0 4px 6px rgba(0,0,0.1)' })
})
