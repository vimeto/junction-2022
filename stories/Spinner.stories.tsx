import { LoadSpinner } from "../components/ui/LoadingSpinner";
import { ComponentStory, ComponentMeta } from "@storybook/react"


const conf = {
  title: 'Spinner',
  component: LoadSpinner,
} as ComponentMeta<typeof LoadSpinner>;

export default conf


const Template: ComponentStory<typeof LoadSpinner> = (args) => (
  <div>
    <LoadSpinner spinSize={args.spinSize}/>
  </div>
)
export const Primary = Template.bind({});
Primary.args = {
  spinSize: 'secondary'
}

