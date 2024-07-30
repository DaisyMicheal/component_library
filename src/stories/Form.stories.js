import React from 'react'
import Form from '../component/Form'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Form',
  component: Form,
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
}

const Template = (args) => <Form {...args} />

export const Default = Template.bind({})
Default.args = {
  onSubmit: action('submitted'),
}
