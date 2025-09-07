import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input
};
export default meta;

type Story = StoryObj<typeof Input>;
export const text: Story = { args: {type: "text" } };
export const password: Story = { args: {type: "password" } };
export const search: Story = { args: {type: "text", search: true } };

