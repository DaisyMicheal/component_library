import React from 'react'
import Form from './component/Form'

const App = () => {
  const handleSubmit = (formData) => {
    console.log('Submitted:', formData)
  }

  return (
    <div className='App'>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default App
