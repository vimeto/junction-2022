import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Card } from "../components/ui/Card/Card";

const conf = {
  title: 'Card',
  component: Card,
  argTypes: {
    bgGray: {
      type: 'boolean'
    }
  }
} as ComponentMeta<typeof Card>;

export default conf;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>Button</Card>
);

export const Gray = Template.bind({});
Gray.args = {
  bgGray: true
};
