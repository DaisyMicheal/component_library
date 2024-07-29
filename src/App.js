import React from 'react'
import Button from './component/Button'

const App = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }
  return (
    <div>
      <Button
        label='Click me'
        backgroundColor='#007bff'
        shadow
        onClick={handleClick}
      />
    </div>
  )
}

export default App
