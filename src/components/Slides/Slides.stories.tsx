import Slides from './Slides';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Molecules/Carousels",
    component: Slides,
    argTypes: {
        onSlideChange: {action: 'changed'},
    },
    args: {},
    parameters: {
        docs: {
            iframeHeight: '600px'
        }}
} as ComponentMeta<typeof Slides>;

//👇 We create a “template” of how args map to rendering
const SlidesTemplate: ComponentStory<typeof Slides> = (args) => <Slides {...args} />;

//👇 We base new Slides instances on our “template” 
// export const Primary = SlidesTemplate.bind({})
export const Default= SlidesTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

Default.args = {
}
