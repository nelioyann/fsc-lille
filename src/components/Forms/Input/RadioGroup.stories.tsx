import RadioGroup from './RadioGroup';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Atoms/FormFields",
    component: RadioGroup,
    argTypes: {
    },
    args: {
    },
    parameters: {
        docs: {
            iframeHeight: '350px'
        }
    }
} as ComponentMeta<typeof RadioGroup>;

//👇 We create a “template” of how args map to rendering
const RadioTemplate: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

//👇 We base new RadioGroup instances on our “template” 
// export const Primary = RadioTemplate.bind({})
export const RadioInput= RadioTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

