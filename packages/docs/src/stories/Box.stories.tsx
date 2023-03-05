import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@math-ignite-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando o elemento</Text>,
  },
} as Meta<BoxProps>;

export const Default: StoryObj<BoxProps> = {
  args: {},
};
