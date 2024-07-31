import React, { useState } from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`

const FormContainer = styled.div`
  text-align: center;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`

const FormTitle = styled.h2`
  color: #ff6600;
  font-size: 24px;
  margin-bottom: 20px;
`

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f2f2f2;
`

const SubmitButton = styled.button`
  background-color: #ff8c42;
  color: white;
  border: none;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  width: calc(100% - 20px);
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff6600;
  }
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`

const Form = ({ onSubmit }) => {
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
    if (!formData.fullName || !formData.email) {
      setError('All fields are required')
    } else {
      setError('')
      setSubmitted(true)
      onSubmit(formData)
    }
  }

  return (
    <OuterContainer>
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
    </OuterContainer>
  )
}

export default Form
