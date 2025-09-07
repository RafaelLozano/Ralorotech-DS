import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    loading: { control: "boolean" },
    children: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100%" ,backgroundColor: "#000",padding: "20px"}}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

/* --- Variantes --- */
export const Default: Story = {
  args: {
    title: "Default Card",
    children: (
      <p>
        This is a <strong>default card</strong> with dynamic content.
      </p>
    ),
  },
};

export const Loading: Story = {
  args: {
    title: "Loading Card",
    loading: true,
  },
};

export const WeatherExample: Story = {
  args: {
    title: "New Delhi",
    children: (
      <div style={{ textAlign: "center" }}>
        <p>Partly Cloudy</p>
        <div style={{ fontSize: "2rem" }}>🌤️</div>
        <strong style={{ fontSize: "2rem" }}>32°</strong>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <span>Max: 32°</span>
          <span>Min: 28°</span>
        </div>
      </div>
    ),
  },
};
