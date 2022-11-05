import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Card } from "../components/ui/Card/Card";

const conf = {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export default conf;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>Button</Card>
);

export const Primary = Template.bind({});
Primary.args = {
  isActive: "primaryActive"
};
