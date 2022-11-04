import { ComponentStory, ComponentMeta } from "@storybook/react"
// import { Button } from "../../ ui/Button";
import { Button } from "../components/ui/Button";


const conf = {
  title: 'Button',
  component: Button,
  argTypes: {
    fullWidth: {
      type: 'boolean'
    }
  }
} as ComponentMeta<typeof Button>;

export default conf;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: 'secondary'
}

export const Danger = Template.bind({});
Secondary.args = {
  intent: 'danger'
}
