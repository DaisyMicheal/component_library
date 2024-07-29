import Button from '../component/Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'handleClick' } },
}

const Template = (args) => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: '#FF0000',
  label: 'Click Me',
  size: 'sm',
  onClick: action('handleClick'),
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: '#008000',
  label: 'Press Me',
  size: 'sm',
  onClick: action('handleClick'),
}

export const Blue = Template.bind({})
Blue.args = {
  backgroundColor: '#0000FF',
  label: 'Press Me',
  size: 'sm',
  onClick: action('handleClick'),
}

export const Orange = Template.bind({})
Orange.args = {
  backgroundColor: '#FF6B00',
  label: 'Press Me',
  size: 'sm',
  onClick: action('handleClick'),
}

export const White = Template.bind({})
White.args = {
  backgroundColor: '#FFFFFF',
  label: 'Click Me',
  size: 'md',
  color: '#0000',
  onClick: action('handleClick'),
}
export const Brown = Template.bind({})
Brown.args = {
  backgroundColor: '#823D28',
  label: 'Click Me',
  size: 'md',
  onClick: action('handleClick'),
}
export const Black = Template.bind({})
Black.args = {
  backgroundColor: 'Black',
  label: 'Click Me',
  size: 'md',
  onClick: action('handleClick'),
}
export const Teal = Template.bind({})
Teal.args = {
  backgroundColor: 'Teal',
  label: 'Click Me',
  size: 'md',
  onClick: action('handleClick'),
}

export const Coral = Template.bind({})
Coral.args = {
  backgroundColor: '#FF6B00',
  label: 'Click Me',
  size: 'lg',
  onClick: action('handleClick'),
}
export const LightPink = Template.bind({})
LightPink.args = {
  backgroundColor: '#D8BFD8',
  label: 'Click Me',
  size: 'lg',
  onClick: action('handleClick'),
}
export const Gray = Template.bind({})
Gray.args = {
  backgroundColor: 'gray',
  label: 'Click Me',
  size: 'lg',
  onClick: action('handleClick'),
}
