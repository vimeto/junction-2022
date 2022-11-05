import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CheckBox } from "../components/ui/CheckBox";


const conf = {
  title: 'CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export default conf

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox checked={args.checked}>
    Task done
  </CheckBox>
)

export const Primary = Template.bind({})
Primary.args = {
  checked: true
}