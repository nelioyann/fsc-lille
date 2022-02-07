import Sidebar from './Sidebar';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';
import Heading from '../components/Headings/Heading';
import Input from '../components/Forms/Input/Input';


export default {
    title: "Layouts/Sidebar",
    component: Sidebar,
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
        //👇 Now all Sidebar stories will have this label.
        // children: "Click me ",
        // fill: "solid",
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Sidebar>;

//👇 We create a “template” of how args map to rendering
const SidebarTemplate: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} >
        <Input label='Todo' name="todo" type="text" placeholder="Enter your new todo..." />
        <Input label='Deadline' name="deadline" type="date" placeholder="Deadline" />
    </Sidebar>
);

//👇 We base new Sidebar instances on our “template” 
// export const Primary = CoverTemplate.bind({})
export const Default = SidebarTemplate.bind({})
// export const RecursiveCover = CoverTemplate.bind({})
// export const SplittedCover = CoverTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
    sideWidth: "20em"
}

// SplittedCover.args = {
//     splitAfter: 1
// }
// RecursiveCover.args = {
//     recursive: true
// }
