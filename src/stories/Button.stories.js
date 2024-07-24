import Button from '../component/Button'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
}

const Template = (args) => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: '#FF0000',
  label: 'Click Me',
  size: 'sm',
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: '#008000',
  label: 'Press Me',
  size: 'sm',
}

export const Blue = Template.bind({})
Blue.args = {
  backgroundColor: '#0000FF',
  label: 'Press Me',
  size: 'sm',
}

export const Orange = Template.bind({})
Orange.args = {
  backgroundColor: '#FF6B00',
  label: 'Press Me',
  size: 'sm',
}

export const White = Template.bind({})
White.args = {
  backgroundColor: '#FFFFFF',
  label: 'Click Me',
  size: 'md',
  color: '#0000',
}
export const Brown = Template.bind({})
Brown.args = {
  backgroundColor: '#823D28',
  label: 'Click Me',
  size: 'md',
}
export const Black = Template.bind({})
Black.args = {
  backgroundColor: 'Black',
  label: 'Click Me',
  size: 'md',
}
export const Teal = Template.bind({})
Teal.args = {
  backgroundColor: 'Teal',
  label: 'Click Me',
  size: 'md',
}

export const Coral = Template.bind({})
Coral.args = {
  backgroundColor: '#FF6B00',
  label: 'Click Me',
  size: 'lg',
}
export const LightPink = Template.bind({})
LightPink.args = {
  backgroundColor: '#D8BFD8',
  label: 'Click Me',
  size: 'lg',
}
export const Gray = Template.bind({})
Gray.args = {
  backgroundColor: 'gray',
  label: 'Click Me',
  size: 'lg',
}
