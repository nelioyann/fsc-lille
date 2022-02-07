import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Molecules/Card",
    component: Card,
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: {
        //👇 Now all Card stories will have this label.
        title: "Title",
    },
    parameters: {
        docs: {
            iframeHeight: '350px'
        }
    }
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

//👇 We base new Card instances on our “template” 
export const ImageCard = CardTemplate.bind({})
export const SimpleCard= CardTemplate.bind({})


//👇 We adapt each instances by providing new attributes 
SimpleCard.args = {
    layout: "simple",
    title: "Game shop",
    subtitle: "USA, Ville Front"
}
