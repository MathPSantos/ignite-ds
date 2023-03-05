import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@math-ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Apenas um texto",
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: "strong",
  },
};
