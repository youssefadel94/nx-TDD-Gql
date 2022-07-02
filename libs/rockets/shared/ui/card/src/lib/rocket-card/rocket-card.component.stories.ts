import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RocketCardComponent } from './rocket-card.component';

export default {
  title: 'RocketCardComponent',
  component: RocketCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RocketCardComponent>;

const Template: Story<RocketCardComponent> = (args: RocketCardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}