import Stack from './Stack';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';


export default {
    title: "Layouts/Stack",
    component: Stack,
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
        //👇 Now all Stack stories will have this label.
        // children: "Click me ",
        // fill: "solid",
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Stack>;

//👇 We create a “template” of how args map to rendering
const StackTemplate: ComponentStory<typeof Stack> = (args) => (
<Stack {...args} >
    <Box>
        <Box/>
        <Box/>
    </Box>
    <Box></Box>
    <Box></Box>
</Stack>
);

//👇 We base new Stack instances on our “template” 
// export const Primary = StackTemplate.bind({})
export const Default= StackTemplate.bind({})
export const RecursiveStack = StackTemplate.bind({})
export const SplittedStack = StackTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
}

SplittedStack.args = {
    splitAfter: 1
}
RecursiveStack.args = {
    recursive: true
}
