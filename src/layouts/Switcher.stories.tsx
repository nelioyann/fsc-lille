import Switcher from './Switcher';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../components/Cards/Card';



export default {
    title: "Layouts/Switcher",
    component: Switcher,
    argTypes: {
        // onClick: {action: 'clicked'},
        as: {
            table: {
                disable: true,
            },
        },
        ref: {
            table: {
                disable: true,
            },
        },
        theme: {
            table: {
                disable: true,
            },
        },
        forwardedAs: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        //👇 Now all Switcher stories will have this label.
        // children: "Click me ",
        space:"0"
        // fill: "solid",
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Switcher>;

//👇 We create a “template” of how args map to rendering
const SwitcherTemplate: ComponentStory<typeof Switcher> = (args) => (
    <Switcher {...args} >
        <Card size="full"/>
        <Card size="full"/>
        <Card size="full"/>
    </Switcher>
);

//👇 We base new Switcher instances on our “template” 
// export const Primary = SwitcherTemplate.bind({})
export const Default = SwitcherTemplate.bind({})
// export const RecursiveSwitcher = SwitcherTemplate.bind({})
// export const SplittedSwitcher = SwitcherTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
}

// SplittedSwitcher.args = {
//     splitAfter: 1
// }
// RecursiveSwitcher.args = {
//     recursive: true
// }
