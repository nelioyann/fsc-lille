import Cover from './Cover';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';
import Heading from '../components/Headings/Heading';


export default {
    title: "Layouts/Cover",
    component: Cover,
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
    args: Cover.defaultProps
} as ComponentMeta<typeof Cover>;

//👇 We create a “template” of how args map to rendering
const CoverTemplate: ComponentStory<typeof Cover> = (args) => (
<Cover style={{border: "1px solid black"}} {...args} >
    <Box borderWidth="0">
        Header
    </Box>
    <Box data-centered borderWidth="0">
        <Heading level="1">Looks like a 📘 cover, hence the name</Heading> 
    </Box>
    <Box borderWidth="0">Footer: by Yannick Nana</Box>
</Cover>
);

//👇 We base new Cover instances on our “template” 
// export const Primary = CoverTemplate.bind({})
export const Default= CoverTemplate.bind({})
