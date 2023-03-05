import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@math-ignite-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
  },
  parameters: {
    docs: {
      description: {
        story: `Por padrão o heading será um 'h2'`,
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
};
