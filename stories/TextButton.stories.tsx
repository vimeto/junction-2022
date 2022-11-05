import { ComponentStory, ComponentMeta } from "@storybook/react"
// import { Button } from "../../ ui/Button";
import { TextButton } from "../components/ui/Button/TextButton";


const conf = {
  title: 'TextButton',
  component: TextButton,
  argTypes: {
    fullWidth: {
      type: 'boolean'
    }
  }
} as ComponentMeta<typeof TextButton>;

export default conf;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args}>Button</TextButton>
);

export const Primary = Template.bind({});

