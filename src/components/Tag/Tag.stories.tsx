import Tag from './Tag';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Atoms/Tag",
    component: Tag,
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: Tag.defaultProps
} as ComponentMeta<typeof Tag>;

//👇 We create a “template” of how args map to rendering
const TagTemplate: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

//👇 We base new button instances on our “template” 
export const BasicTag= TagTemplate.bind({})
