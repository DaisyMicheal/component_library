import React from 'react'
import Form from '../component/Form'

export default {
  title: 'Form',
  component: Form,
}

const Template = (args) => <Form {...args} />

export const Default = Template.bind({})
Default.args = {}
