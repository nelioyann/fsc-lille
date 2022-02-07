import IconButton from './IconButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward, chevronBack } from 'ionicons/icons';


export default {
    title: "Atoms/Buttons",
    component: IconButton,
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: {
        //👇 Now all IconButton stories will have this label.
        fill: "solid",
        icon: arrowForward

    }
} as ComponentMeta<typeof IconButton>;

//👇 We create a “template” of how args map to rendering
const ButtonTemplate: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

//👇 We base new button instances on our “template” 
// export const Primary = ButtonTemplate.bind({})
export const Icon_Button= ButtonTemplate.bind({})
export const BackButton= ButtonTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

BackButton.args = {
    icon: chevronBack,
    fill: "outline"
}