import Textarea from './Textarea';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Atoms/FormFields",
    component: Textarea,
    argTypes: {
        onIonChange: {action: 'changed'},
    },
    args: {
        //👇 Now all Textarea stories will have this label.
        name: "inputName",
        label: "Label",
        placeholder: "Enter something here...",
        type: "text"
    }
} as ComponentMeta<typeof Textarea>;

//👇 We create a “template” of how args map to rendering
const InputTemplate: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

//👇 We base new Textarea instances on our “template” 
export const TextareaInput = InputTemplate.bind({})


//👇 We adapt each instances by providing new attributes 
