import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Atoms/Buttons",
    component: Button,
    argTypes: {
        onClick: {action: 'clicked'},
        mode: {
            control: false
        }
    },
    args: {
        //👇 Now all Button stories will have this label.
        label: "Click me",
        fill: "solid",
        isLoading: false,
        mode: "ios"
    }
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 We base new button instances on our “template” 
export const BasicButton= ButtonTemplate.bind({})

//👇 We adapt each instances by providing new attributes 



