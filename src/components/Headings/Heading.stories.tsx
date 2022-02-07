import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

export default {
    title: "Atoms/Heading",
    component: Heading,
    args: {
        children: "Almost before we knew it, we had left the ground.",
        level: "4",
        color: "primary"
    }
} as ComponentMeta<typeof Heading>

const HeadingTemplate: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = HeadingTemplate.bind({})



