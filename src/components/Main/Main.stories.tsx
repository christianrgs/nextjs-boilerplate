import Main from './Main'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Main',
  component: Main,
  args: {
    title: 'title template',
    description: 'description template'
  }
} as ComponentMeta<typeof Main>

export const Template: ComponentStory<typeof Main> = args => <Main {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}
