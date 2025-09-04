import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary","secondary","ghost","danger"] },
    size: { control: "radio", options: ["sm","md","lg"] },
    block: { control: "boolean" },
    loading: { control: "boolean" }
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: "Primary" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Ghost" } };
export const Danger: Story = { args: { variant: "danger", children: "Danger" } };
export const Loading: Story = { args: { loading: true, children: "Loading" } };
export const Block: Story = { args: { block: true, children: "Full width" } };
