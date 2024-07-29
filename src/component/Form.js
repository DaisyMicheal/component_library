import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 10px auto;
`

const FormTitle = styled.h2`
  color: #ff7f27;
  font-size: 24px;
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f2f2f2;
`

const SubmitButton = styled.button`
  background-color: #ff7f27;
  color: white;
  border: none;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e67300;
  }
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName) {
      setError('Name is required')
    } else {
      setError('')
      setSubmitted(true)
    }
  }

  return (
    <FormContainer>
      <FormTitle>HEY LET’S GET IN TOUCH</FormTitle>
      {submitted ? (
        <p>Form submitted successfully</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='FullName'
            required
          />
          <Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton type='submit'>Submit</SubmitButton>
        </form>
      )}
    </FormContainer>
  )
}

export default Form
