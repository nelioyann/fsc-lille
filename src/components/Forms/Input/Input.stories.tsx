import Input from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Atoms/FormFields",
    component: Input,
    argTypes: {
        onIonChange: {action: 'changed'},
    },
    args: {
        //👇 Now all Input stories will have this label.
        name: "inputName",
        label: "Label",
        placeholder: "Enter something here..."

    }
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

//👇 We base new Input instances on our “template” 
export const BasicInput= InputTemplate.bind({})
export const PasswordInput= InputTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

PasswordInput.args = {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    name: "password",
    autocomplete: "off"
}
