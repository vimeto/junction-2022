import { ComponentStory, ComponentMeta } from "@storybook/react"
import { IconButton } from "../components/ui/Button/IconButton";
import { MdArrowBackIosNew } from 'react-icons/md'

const conf = {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export default conf;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <MdArrowBackIosNew/>
  </IconButton>
);

export const Primary = Template.bind({});
