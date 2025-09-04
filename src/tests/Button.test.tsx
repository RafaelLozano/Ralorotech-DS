import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../src/components/Button/Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies variant and size modifiers", () => {
    render(<Button variant="secondary" size="lg">OK</Button>);
    const el = screen.getByText("OK");
    expect(el.className).toContain("rl-Button--variant-secondary");
    expect(el.className).toContain("rl-Button--size-lg");
  });
});
