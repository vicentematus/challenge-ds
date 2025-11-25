import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../src/components/Text";

const meta = {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    size: {
      control: "select",
      options: ["text-xs", "text-sm", "text-md", "text-lg", "text-xl"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
};

export const Small: Story = {
  args: {
    size: "text-sm",
    children: "Small text for captions and labels",
  },
};

export const Medium: Story = {
  args: {
    size: "text-md",
    children: "Medium text for body content",
  },
};

export const Large: Story = {
  args: {
    size: "text-lg",
    children: "Large text for emphasis",
  },
};

export const Bold: Story = {
  args: {
    weight: "bold",
    children: "Bold text for strong emphasis",
  },
};

export const Semibold: Story = {
  args: {
    weight: "semibold",
    children: "Semibold text for moderate emphasis",
  },
};

export const LargeBold: Story = {
  args: {
    size: "text-lg",
    weight: "bold",
    children: "Large bold text combining size and weight",
  },
};
