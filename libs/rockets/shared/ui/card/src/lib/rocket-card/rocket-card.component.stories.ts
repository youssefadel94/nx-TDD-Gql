import { MatCardModule } from '@angular/material/card';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RocketCardComponent } from './rocket-card.component';

export default {
  title: 'RocketCardComponent',
  component: RocketCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule],
    })
  ],
} as Meta<RocketCardComponent>;

const Template: Story<RocketCardComponent> = (args: RocketCardComponent) => ({
  props: args,
});


export const rocketListCard = Template.bind({});
rocketListCard.args = {
  rocketList: {
    description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    id: "falcon1",
    name: "Falcon 1",
    __typename: "Rocket"
  }
}

export const rocketDetailCard = Template.bind({});
rocketDetailCard.args = {
}
