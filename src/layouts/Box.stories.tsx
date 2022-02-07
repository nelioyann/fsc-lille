import Box from './Box';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/Headings/Heading';
import { Center, Stack } from '.';
import { MediumParagraph, SpacingEnum } from '../theme/globalStyles';


export default {
    title: "Layouts/Box",
    component: Box,
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
    args: Box.defaultProps
} as ComponentMeta<typeof Box>;

//👇 We create a “template” of how args map to rendering
const BoxTemplate: ComponentStory<typeof Box> = (args) => (
    <Box {...args} >
        <Heading level="1">Boxed element</Heading>
    </Box>
);

//👇 We base new Box instances on our “template” 
// export const Primary = BoxTemplate.bind({})
export const Default = BoxTemplate.bind({})
// export const RecursiveBox = BoxTemplate.bind({})
// export const SplittedBox = BoxTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
    padding: SpacingEnum.s1
}

// SplittedBox.args = {
//     splitAfter: 1
// }
// RecursiveBox.args = {
//     recursive: true
// }
